import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const table: AppRouteModule = {
  path: 'table',
  name: 'Table',
  redirect: '/table/basicTable',
  component: LAYOUT,
  meta: {
    title: '表格',
    requiresAuth: true,
  },
  children: [
    {
      path: 'basicTable',
      name: 'BasicTable',
      component: () => import('/@/views/table/index.vue'),
      meta: {
        title: '基础表格',
        requiresAuth: true,
      },
    },
  ],
};

export default table;
