<template>
  <div class="menu">
    <Menu
      :selectedKeys="menuState.selectedKeys"
      mode="vertical"
      :openKeys="menuState.openKeys"
      @click="handleClick"
    >
      <SubMenuItem :menuList="menuList" />
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { Menu } from 'ant-design-vue';
  import type { MenuProps } from 'ant-design-vue';
  import type { Menu as MenuType } from '/@/router/types';
  import type { MenuState } from '/@/router/types';

  import SubMenuItem from './components/SubMenuItem.vue';
  import { getMenuList } from '/@/api/modules/login';
  import { useMenuStore } from '/@/store/modules/menu';
  import { usePermissionStore } from '/@/store/modules/permission';
  import { reactive, computed, onMounted } from 'vue';
  import { handleRouter } from '/@/utils/util';
  import { useGo } from '/@/hooks/web/usePage';

  const go = useGo();
  const MenuStore = useMenuStore();
  const PermissionStore = usePermissionStore();

  const menuState = reactive<MenuState>({
    defaultSelectedKeys: [],
    openKeys: [],
    selectedKeys: [],
    collapsedOpenKeys: [],
  });

  onMounted(async () => {
    // 获取菜单列表
    try {
      const res = await getMenuList();
      if (!res.data) return;
      // 把路由菜单处理成一维数组（存储到 pinia 中）
      const dynamicRouter = handleRouter(res.data);
      PermissionStore.setAuthRouter(dynamicRouter);
      MenuStore.setMenuList(res.data);
    } finally {
    }
  });
  const handleClick: MenuProps['onClick'] = (menuInfo) => {
    const { key } = menuInfo;
    const path: string = key;
    go(path);
  };

  const menuList = computed((): MenuType[] => MenuStore.menuList);
</script>

<style scoped lang="less">
  .menu {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #191a20;
  }
</style>
