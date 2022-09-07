<template>
  <Layout class="layout">
    <LayoutSide>sss</LayoutSide>
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
  import cacheRouter from '/@/router/cacheRouter';

  import { Layout } from 'ant-design-vue';
  const LayoutSide = Layout.Sider;
  const LayoutContent = Layout.Content;
</script>
<style scoped lang="scss">
  @import './index.scss';
</style>
