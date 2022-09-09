<template>
  <div class="menu" :style="{ width: isCollapse ? '65px' : '220px' }" v-loading="loading">
    <Logo :isCollapse="isCollapse" />
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :router="true"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="true"
        background-color="#191a20"
        text-color="#bdbdc0"
        active-text-color="#fff"
      >
        <SubItem :menuList="menuList" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
</script>

<style scoped lang="scss"></style>
