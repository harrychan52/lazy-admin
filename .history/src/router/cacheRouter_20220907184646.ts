import { basicRoutes } from '/@/router/routes';
import type { AppRouteRecordRaw } from '/@/router/types';
import { RouteRecordName } from 'vue-router';

/**
 * @description 使用递归，过滤需要缓存的路由
 * @param {Array} _route 所有路由表
 * @param {Array} _cache 缓存的路由表
 * @return void
 * */
const cacheRouter: any[] = [];
const filterKeepAlive = (_route: AppRouteRecordRaw[], _cache: RouteRecordName[]): void => {
  _route.forEach((item) => {
    item.meta?.keepAlive && item.name && _cache.push(item.name);
    item.children && item.children.length !== 0 && filterKeepAlive(item.children, _cache);
  });
};

filterKeepAlive(basicRoutes, cacheRouter);

export default cacheRouter;
