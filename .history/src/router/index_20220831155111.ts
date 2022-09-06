import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHistory  } from 'vue-router';
//创建一个可以被vue应用使用的路由实例
export const router = createRouter({
  //创建一个hash历史记录
  history: createWebHistory(),
  // 应该添加到路由的初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
});
