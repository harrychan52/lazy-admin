import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((item) => {
  Object.keys(modules[item]).forEach((key: any) => {
    routeModuleList.push(...modules[item][key]);
  });
});
console.log(routeModuleList);
// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/login',
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
    requiresAuth: false,
  },
};

export const basicRoutes = [LoginRoute, RootRoute, ...routeModuleList];
