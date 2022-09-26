import { defineStore } from 'pinia';
import { store } from '/@/store';
import type { Menu } from '/@/router/types';

interface PermissionState {
  // 用户按钮权限列表
  authButtons: {
    [propName: string]: any;
  };
  // 后台菜单列表
  backMenuList: Menu[];
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    // 用户按钮权限列表
    authButtons: {},
    // 路由权限列表
    backMenuList: [],
  }),
  getters: {
    // 处理权限按钮数据，用于方便控制按钮
    authButtonsObj: (state) => {
      return state.authButtons;
    },
    // 后台返回的菜单数据，用于方便控制路由跳转时权限（这里已经处理成一维数组了）
    dynamicRouter(): Menu[] {
      return this.backMenuList;
    },
  },
  actions: {
    // setAuthButtons
    async setAuthButtons(authButtonList: { [key: string]: any }) {
      this.authButtons = authButtonList;
    },
    // setAuthRouter
    async setAuthRouter(dynamicRouter: Menu[]) {
      this.backMenuList = dynamicRouter;
    },
  },
});
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
