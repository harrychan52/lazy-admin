<template>
  <div class="menu" v-loading="loading">
    <Menu>
      <template v-for="item in items" :key="item.path">
        <SubMenuItem />
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { Menu } from 'ant-design-vue';

  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const loading = ref(false);
</script>

<style scoped lang="scss"></style>
