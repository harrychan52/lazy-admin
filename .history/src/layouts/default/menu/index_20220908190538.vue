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
  import { getMenuList } from '/@/api/modules/login';
  import { PermissionStore } from "/@/store/modules/permission";
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  onMounted(async () => {
	// 获取菜单列表
	loading.value = true;
	try {
		const res = await getMenuList();
		if (!res.data) return;
		// 把路由菜单处理成一维数组（存储到 pinia 中）
		const dynamicRouter = handleRouter(res.data);
		authStore.setAuthRouter(dynamicRouter);
		menuStore.setMenuList(res.data);
	} finally {
		
  const loading = ref(false);
</script>

<style scoped lang="less"></style>
