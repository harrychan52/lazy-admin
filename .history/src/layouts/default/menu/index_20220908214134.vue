<template>
  <div class="menu">
    <Menu>
      <SubMenuItem :menuList="menuList" />
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { Menu } from 'ant-design-vue';
  import SubMenuItem from './components/SubMenuItem.vue';
  import { getMenuList } from '/@/api/modules/login';
  import { useMenuStore } from '/@/store/modules/menu';
  import { usePermissionStore } from '/@/store/modules/permission';
  import { ref, computed, onMounted } from 'vue';
import { handleRouter } from "/@/utils/util";

  import { useRoute } from 'vue-router';
  const MenuStore = useMenuStore();
  const PermissionStore = usePermissionStore();
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

  const menuList = computed((): Menu.MenuOptions[] => MenuStore.menuList);
</script>

<style scoped lang="less"></style>
