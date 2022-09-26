import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { AxiosCanceler } from './axiosCancel';
import { useUserStoreWithOut } from '/@/store/modules/user';
import { ResultEnum } from '/@/enums/httpEnum';

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
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      const userStore = useUserStoreWithOut();
      // * 将当前请求添加到 pending 中
      axiosCanceler.addPending(config);
    });
  }
}
export default new RequestHttp(config);
