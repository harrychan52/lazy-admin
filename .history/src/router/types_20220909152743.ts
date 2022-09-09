import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { defineComponent } from 'vue';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}
export type AppRouteModule = AppRouteRecordRaw;

export interface Menu {
  name: string;

  icon?: string;

  path: string;

  // path contains param, auto assignment.
  paramPath?: string;

  disabled?: boolean;

  children?: Menu[];

  orderNo?: number;

  meta?: Partial<RouteMeta>;

  hideMenu?: boolean;
}

export interface MenuState {
  // 默认选中的列表
  defaultSelectedKeys: string[];

  // 模式
  // mode: MenuModeEnum;

  // // 主题
  // theme: ComputedRef<ThemeEnum> | ThemeEnum;

  // 缩进
  inlineIndent?: number;

  // 展开数组
  openKeys: string[];

  // 当前选中的菜单项 key 数组
  selectedKeys: string[];

  // 收缩状态下展开的数组
  collapsedOpenKeys: string[];
}
