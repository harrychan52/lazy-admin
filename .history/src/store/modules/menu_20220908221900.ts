import { defineStore } from 'pinia';
import { store } from '/@/store';
import type { Menu } from '/@/router/types';

export interface MenuState {
  isCollapse: boolean;
  menuList: Menu;
}
// MenuStore
export const useMenuStore = defineStore({
  id: 'MenuState',
  state: (): MenuState => ({
    // menu collapse
    isCollapse: false,
    // menu List
    menuList: [],
  }),
  getters: {},
  actions: {
    async setCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    async setMenuList(menuList: Menu) {
      this.menuList = menuList;
    },
  },
});
export function useMenuStoreWithOut() {
  return useMenuStore(store);
}
