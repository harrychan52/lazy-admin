<template>
  <Layout class="layout">
    <LayoutSide>
      <Menu />
    </LayoutSide>
    <LayoutContent class="main">
      <router-view v-slot="{ Component, route }">
        <transition appear name="fade-transform" mode="out-in">
          <keep-alive :include="cacheRouter">
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </LayoutContent>
  </Layout>
</template>
<script lang="ts" setup>
  import Menu from './Menu/index.vue';
  import cacheRouter from '/@/router/cacheRouter';

  import { Layout } from 'ant-design-vue';
  const LayoutSide = Layout.Sider;
  const LayoutContent = Layout.Content;
</script>
<style scoped lang="less">
  .layout {
    min-height: 100%;
  }
</style>
