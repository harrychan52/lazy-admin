<template>
  <Layout>
    <LayoutSide>sss</LayoutSide>
    <LayoutContent>
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
