import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';

const learn: AppRouteModule = {
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
      component: getParentLayout('Table'),
      meta: {
        title: '表格',
        requiresAuth: true,
      },
      children: [
        {
          path: 'basic',
          name: 'BasicTable',
          component: () => import('/@/views/demo/learn/table/index.vue'),
          meta: {
            title: '基础表格',
            requiresAuth: true,
          },
        },
      ],
    },
  ],
};

export default learn;
