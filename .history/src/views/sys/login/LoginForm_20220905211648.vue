<template>
  <Form :model="formData" ref="loginFormRef" size="large">
    <FormItem name="username">
      <Input size="large" v-model:value="formData.username" placeholder="请输入账号" />
    </FormItem>
    <FormItem name="password">
      <InputPassword size="large" v-model:value="formData.password" placeholder="请输入密码" />
    </FormItem>
  </Form>
  <div class="login-btn">
    <Button type="primary" size="large" @click="resetForm(loginFormRef)">重置</Button>
    <Button round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
      登录
    </Button>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { Form, Input, Button } from 'ant-design-vue';
  import { loginApi } from '/@/api/modules/login';
  import { useUserStoreWithOut } from '/@/store/modules/user';
  import { message } from 'ant-design-vue';
  import { router } from '/@/router';

  const formData = reactive({
    username: 'lazy',
    password: '123456',
  });
  const FormItem = Form.Item;
  const InputPassword = Input.Password;
  const loginFormRef = ref();
  const loading = ref<boolean>(false);
  const userStore = useUserStoreWithOut();

  // login
  const login = (formEl) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        loading.value = true;
        try {
          const requestLoginForm = {
            username: formData.username,
            password: formData.password,
          };
          const res = await loginApi(requestLoginForm);
          // * 存储 token
          userStore.setToken(res.data!.access_token);
          // // * 登录成功之后清除上个账号的 menulist 和 tabs 数据
          // menuStore.setMenuList([]);
          // tabStore.closeMultipleTab();

          message.success('登录成功！');
          router.push({ name: 'home' });
        } finally {
          loading.value = false;
        }
      }
    });
  };
  const resetForm = (formEl) => {
    console.log(formEl);
    if (!formEl) return;
    formEl.resetFields();
  };
</script>
<style scoped lang="less">
  @import './index.scss';
</style>
