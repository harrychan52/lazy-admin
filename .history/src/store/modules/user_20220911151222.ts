import { defineStore } from 'pinia';
import { store } from '/@/store';
import type { UserInfo } from '/#/store';
import piniaPersistConfig from '/@/config/piniaPersist';

export interface UserState {
  token: string;
  userInfo: any;
  language: string;
}
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useUserStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'app-user',
  // state: 返回对象的函数
  state: (): UserState => ({
    // token
    token: '',
    // userInfo
    userInfo: '',
    // language
    language: '',
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo;
    },
    getToken(): string {
      return this.token;
    },
  },
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token;
    },
    // setUserInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
