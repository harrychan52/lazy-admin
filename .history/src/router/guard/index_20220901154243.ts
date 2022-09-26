import type { Router, RouteRecordRaw } from 'vue-router';
import { RootRoute } from '/@/router/routes';
import { PageEnum } from '/@/enums/pageEnum';
import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';
import { useUserStoreWithOut } from '/@/store/modules/user';

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const ROOT_PATH = RootRoute.path;

export function setupRouterGuard(router: Router) {
  createPermissionGuard(router);
}
function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  // const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    // * 判断当前路由是否需要访问权限
    if (!to.matched.some((record) => record.meta.requiresAuth)) return next();

    const token = userStore.getToken;
    // * 判断是否有Token
    if (!token) {
      next({
        path: '/login',
      });
      return;
    }

    // Jump to the 404 page after processing the login
    if (
      from.path === LOGIN_PATH &&
      to.name === PAGE_NOT_FOUND_ROUTE.name &&
      to.fullPath !== (userStore.getUserInfo.homePath || PageEnum.BASE_HOME)
    ) {
      next(userStore.getUserInfo.homePath || PageEnum.BASE_HOME);
      return;
    }

    // if (permissionStore.getIsDynamicAddedRoute) {
    //   next();
    //   return;
    // }

    // const routes = await permissionStore.buildRoutesAction();

    // routes.forEach((route) => {
    //   router.addRoute(route as unknown as RouteRecordRaw);
    // });

    // router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);

    // permissionStore.setDynamicAddedRoute(true);

    // if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
    //   // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
    //   next({ path: to.fullPath, replace: true, query: to.query });
    // } else {
    //   const redirectPath = (from.query.redirect || to.path) as string;
    //   const redirect = decodeURIComponent(redirectPath);
    //   const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    //   next(nextData);
    // }
  });
}
