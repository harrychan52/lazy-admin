import type { AxiosInstance } from 'axios';
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
}
