import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/learn',
  meta: {
    title: 'Root',
  },
};

export const basicRoutes = [RootRoute];
