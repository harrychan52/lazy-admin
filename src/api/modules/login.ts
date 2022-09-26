import { Login } from '/#/http';
// import qs from 'qs';

import http from '/@/http';

enum Api {
  // The address does not exist
  Login = '/lazy',
}
/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(Api.Login + `/login`, params); // 正常 post json 请求  ==>  application/json
  // return http.post<Login.ResLogin>(Api.Login + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  // return http.post<Login.ResLogin>(Api.Login + `/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
  // return http.post<Login.ResLogin>(Api.Login + `/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};

// * 获取按钮权限
export const getAuthButtons = () => {
  return http.get<Login.ResAuthButtons>(Api.Login + `/auth/buttons`);
};

// * 获取菜单列表
export const getMenuList = () => {
  return http.get<Menu.MenuOptions[]>(Api.Login + `/menu/list`);
};
