import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import { createFakeUserList } from './user';

// single
const homeRoute = {
  path: '/home',
  name: 'Home',
  component: 'LAYOUT',
  redirect: '/home/index',
  meta: {
    title: 'routes.home.home',
    icon: 'bx:bx-home',
  },
};

const tableRoute = {
  path: '/table',
  name: 'Table',
  component: 'LAYOUT',
  redirect: '/table/basicTable',
  meta: {
    icon: 'carbon:user-role',
    title: '表格',
  },
  children: [
    {
      path: 'basicTable',
      name: 'BasicTable',
      component: '/table/basicTable',
      meta: {
        title: '基础表格',
      },
    },
  ],
};

export default [
  {
    url: '/lazy/menu/list',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid user token!');
      }
      const id = checkUser.userId;
      let menu: Object[];
      switch (id) {
        case '1':
          menu = [homeRoute, tableRoute];
          break;
        case '2':
          menu = [homeRoute, tableRoute];
          break;
        default:
          menu = [];
      }

      return resultSuccess(menu);
    },
  },
] as MockMethod[];
