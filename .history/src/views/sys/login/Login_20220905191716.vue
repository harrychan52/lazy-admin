<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img src="/src/assets/images/login_left0.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="/src/assets/images/logo.svg" alt="" />
          <p class="logo-text">lazy-admin</p>
        </div>
        <LoginForm ref="loginRef" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
  import LoginForm from './LoginForm.vue';
  import { LoginFormExpose } from './interface/index';
  import { ref, reactive, provide } from 'vue';

  // * 以下数据都为自己测试使用，不参与任何功能开发（可直接删除）
  // 使用provide传方法
  let phone = ref<string>('iphone');
  // provide
  provide('provideState', {
    name: 'liutao',
    age: '20',
    changeName: () => {
      // console.log(phone.value);
      setTimeout(() => {
        phone.value = 'huawei';
        // console.log(phone.value);
      }, 1000);
    },
  });

  // 传给子组件方法（submitParent）
  // const submitParent = (LoginFrom: Login.ReqLoginForm) => {
  // 	console.log(LoginFrom);
  // };

  // 使用子组件数据
  const loginRef = ref<LoginFormExpose | null>(null);
  // const consoleRef = () => {
  // 	console.log(loginRef.value?.count);
  // 	loginRef.value?.consoleNumber("liu");
  // };

  // 定义数据类型两种方法
  // const item: Ref<string> = ref("111");
  // const item1 = ref<number>(111);

  // 使用toRefs解构数据（在template中直接用）
  // const { username, password } = toRefs(obj);
</script>

<style scoped lang="less">
  @import './index.scss';
</style>
