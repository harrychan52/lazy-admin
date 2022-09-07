import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';

const home: AppRouteModule = {
  path: '/learn',
  name: 'LearnDemo',
  redirect: '/learn/icon',
  component: LAYOUT,
  meta: {
    orderNo: 6000,
    icon: 'ion:git-compare-outline',
    title: '学习',
  },

  children: [
    {
      path: 'table',
      name: 'Table',
      redirect: '/learn/table/basic',
      component: () => import('/@/views/demo/learn/table/index.vue'),
      meta: {
        title: '首页',
        requiresAuth: true,
      },
    },
  ],
};

export default home;
