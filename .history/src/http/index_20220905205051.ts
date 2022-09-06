import type { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';
import { AxiosCanceler } from './axiosCancel';
import { useUserStoreWithOut } from '/@/store/modules/user';
import { ResultEnum } from '/@/enums/httpEnum';
import { router } from '/@/router';

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
};
class RequestHttp {
  private axiosInstance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.setupInterceptors();
  }
  private setupInterceptors() {
    const axiosCanceler = new AxiosCanceler();
    /**
     * @description 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/本地储存当中
     */
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const userStore = useUserStoreWithOut();
        // * 将当前请求添加到 pending 中
        axiosCanceler.addPending(config);
        const token: string = userStore.token;
        return { ...config, headers: { ...config.headers, 'x-access-token': token } };
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        const userStore = useUserStoreWithOut();

        // * 在请求结束后，移除本次请求
        axiosCanceler.removePending(config);
        // tryHideFullScreenLoading();
        // * 登陆失效（code == 599）
        if (data.code == ResultEnum.OVERDUE) {
          ElMessage.error(data.msg);
          userStore.setToken('');
          router.replace({
            path: '/login',
          });
          return Promise.reject(data);
        }
        // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          ElMessage.error(data.msg);
          return Promise.reject(data);
        }
        // * 成功请求
        return data;
      },
      async (error: AxiosError) => {
        const { response } = error;
        // tryHideFullScreenLoading();
        // 根据响应的错误状态码，做不同的处理
        if (response) return checkStatus(response.status);
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) return router.replace({ path: '/500' });
        return Promise.reject(error);
      },
    );
  }
}
export default new RequestHttp(config);
