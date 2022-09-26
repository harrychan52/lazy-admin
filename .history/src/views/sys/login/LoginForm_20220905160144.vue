<template>
  <Form :model="formData" ref="loginFormRef" size="large">
    <FormItem name="account">
      <Input size="large" v-model:value="formData.account" placeholder="请输入账号" />
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
  import { reactive, ref, unref, computed } from 'vue';

  import { Form, Input, Button } from 'ant-design-vue';

  const formData = reactive({
    account: 'lazy',
    password: '123456',
  });
  const FormItem = Form.Item;
  const InputPassword = Input.Password;
  const loginFormRef = ref();
  // login
  const login = (formEl) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        loading.value = true;
        try {
          const requestLoginForm: Login.ReqLoginForm = {
            username: loginForm.username,
            password: md5(loginForm.password),
          };
          const res = await loginApi(requestLoginForm);
          // * 存储 token
          globalStore.setToken(res.data!.access_token);
          // * 登录成功之后清除上个账号的 menulist 和 tabs 数据
          menuStore.setMenuList([]);
          tabStore.closeMultipleTab();

          ElMessage.success('登录成功！');
          router.push({ name: 'home' });
        } finally {
          loading.value = false;
        }
      }
    });
  };
  const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
  };
</script>
<style scoped lang="scss">
  @import './index.scss';
</style>
