import { defineStore } from 'pinia';
import { store } from '/@/store';

export interface MenuState {
  isCollapse: boolean;
  menuList: Menu.MenuOptions[];
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
    async setMenuList(menuList: Menu.MenuOptions[]) {
      this.menuList = menuList;
    },
  },
});
export function useMenuStoreWithOut() {
  return useMenuStore(store);
}
