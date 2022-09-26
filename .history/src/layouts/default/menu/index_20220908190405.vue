<template>
  <div class="menu" v-loading="loading">
    <Menu>
      <SubMenuItem :menuList="menuList" />
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { Menu } from 'ant-design-vue';
  import SubMenuItem from './components/SubMenuItem.vue';
  import { getMenuList } from '@/api/modules/login';

  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const loading = ref(false);
</script>

<style scoped lang="less"></style>
