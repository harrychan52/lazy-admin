<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <div class="left-title"> Lazy Admin </div>
        <div class="left-content"> 睡个懒觉，等等再叫我起床 </div>
      </div>
      <div class="login-form">
        <LoginForm ref="loginRef" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
  import LoginForm from './LoginForm.vue';
</script>

<style scoped lang="less">
  @import './index.less';
</style>
