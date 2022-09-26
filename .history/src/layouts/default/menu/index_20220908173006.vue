<template>
  <div class="menu" v-loading="loading"> </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const loading = ref(false);
</script>

<style scoped lang="scss"></style>
