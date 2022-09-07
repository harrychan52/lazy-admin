import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const home: RouteModule = {
  path: '/home',
  name: 'Home',
  redirect: '/home/index',
  component: LAYOUT,
  meta: {
    orderNo: 6000,
    icon: 'ion:git-compare-outline',
    title: '首页',
  },

  children: [
    {
      path: 'index',
      name: 'HomePage',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        title: '首页',
        requiresAuth: true,
      },
    },
  ],
};

export default home;
