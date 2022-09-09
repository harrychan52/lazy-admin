<template>
  <div class="menu" :style="{ width: isCollapse ? '65px' : '220px' }" v-loading="loading">
    
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
</script>

<style scoped lang="scss"></style>
