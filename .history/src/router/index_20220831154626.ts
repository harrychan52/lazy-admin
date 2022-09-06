import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
//创建一个可以被vue应用使用的路由实例
export const router = createRouter({
  //创建一个hash历史记录
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
});
