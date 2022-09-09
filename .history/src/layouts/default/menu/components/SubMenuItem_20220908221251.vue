<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <SubMenu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
      <template #icon>
        <component :is="subItem.icon" />
      </template>
      <template #title>
        <span>{{ subItem.name }}</span>
      </template>
      <SubMenuItem :menuList="subItem.children" />
    </SubMenu>
    <MenuItem v-else :index="subItem.path">
      <template #icon>
        <component :is="subItem.icon" />
      </template>
      <template v-if="!subItem.isLink" #title>
        <span>{{ subItem.name }}</span>
      </template>
      <template v-else #title>
        <a class="menu-href" :href="subItem.isLink" target="_blank">{{ subItem.name }}</a>
      </template>
    </MenuItem>
  </template>
</template>

<script setup lang="ts">
  import type { Menu as MenuType } from '/@/router/types';

  import { Menu } from 'ant-design-vue';
  const SubMenu = Menu.SubMenu;
  const MenuItem = Menu.Item;
  defineProps<{ menuList: MenuType }>();
</script>

<style scoped lang="less"></style>
