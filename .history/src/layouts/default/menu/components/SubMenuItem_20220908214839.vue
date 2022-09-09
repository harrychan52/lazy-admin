<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <SubMenu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
      <template #icon>
        <component :is="subItem.icon" />
      </template>
      <template #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <SubMenuItem :menuList="subItem.children" />
    </SubMenu>
    <MenuItem v-else :index="subItem.path">
      <template #icon>
        <component :is="subItem.icon" />
      </template>
      <template v-if="!subItem.isLink" #title>
        <span>{{ subItem.title }}</span>
      </template>
      <template v-else #title>
        <a class="menu-href" :href="subItem.isLink" target="_blank">{{ subItem.title }}</a>
      </template>
    </MenuItem>
  </template>
</template>

<script setup lang="ts">
  import { Menu } from 'ant-design-vue';
  const SubMenu = Menu.SubMenu;
  const MenuItem = Menu.Item;
  defineProps<{ menuList: Menu.MenuOptions[] }>();
</script>

<style scoped lang="less"></style>
