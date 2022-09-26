<template>
  <div class="menu" v-loading="loading">
    <Menu>
      <SubMenuItem />
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { Menu } from 'ant-design-vue';
import SubMenuItem form './components/SubMenuItem'
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const loading = ref(false);
</script>

<style scoped lang="scss"></style>
