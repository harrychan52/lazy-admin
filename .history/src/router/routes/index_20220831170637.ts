import type { AppRouteRecordRaw } from '/@/router/types';

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/learn',
  meta: {
    title: 'Root',
  },
};
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: '登录页', //t('routes.basic.login')
  },
};

export const basicRoutes = [LoginRoute, RootRoute];
