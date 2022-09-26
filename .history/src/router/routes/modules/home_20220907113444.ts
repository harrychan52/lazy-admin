import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  redirect: '/home/index',
  component: LAYOUT,
  meta: {
    orderNo: 6000,
    icon: 'ion:git-compare-outline',
    title: '学习',
  },

  children: [
    {
      path: 'index',
      name: 'HomePage',
      redirect: '/learn/table/basic',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        title: '首页',
        requiresAuth: true,
      },
    },
  ],
};

export default home;
