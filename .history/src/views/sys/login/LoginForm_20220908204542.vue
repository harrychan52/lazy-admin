<template>
  <Form :model="formData" ref="loginFormRef" :rules="loginRules" size="large">
    <FormItem name="username">
      <Input size="large" v-model:value="formData.username" placeholder="请输入账号" />
    </FormItem>
    <FormItem name="password">
      <InputPassword size="large" v-model:value="formData.password" placeholder="请输入密码" />
    </FormItem>
  </Form>
  <div class="login-btn">
    <Button type="primary" shape="round" size="large" @click="resetForm(loginFormRef)">重置</Button>
    <Button
      type="primary"
      html-type="submit"
      shape="round"
      @click="login(loginFormRef)"
      size="large"
      :loading="loading"
    >
      登录
    </Button>
  </div>
</template>
<script lang="ts" setup>
  import type { Rule } from 'ant-design-vue/es/form';
  import { reactive, ref } from 'vue';
  import { Form, Input, Button, FormInstance } from 'ant-design-vue';
  import { loginApi } from '/@/api/modules/login';
  import { useUserStoreWithOut } from '/@/store/modules/user';
  import { message } from 'ant-design-vue';
  import { router } from '/@/router';
  import { Login } from '/#/http';

  const formData = reactive({
    username: 'lazy',
    password: '123456',
  });
  const FormItem = Form.Item;
  const InputPassword = Input.Password;
  // type FormInstance = InstanceType<typeof Form>;
  const loginFormRef = ref<FormInstance>();
  const loginRules: Record<string, Rule[]> = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  });

  const loading = ref<boolean>(false);
  const userStore = useUserStoreWithOut();

  // login
  const login = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    const valid = await formEl.validate();
    if (valid) {
      loading.value = true;
      try {
        const requestLoginForm: Login.ReqLoginForm = {
          username: formData.username,
          password: formData.password,
        };

        const res = await loginApi(requestLoginForm);
        // * 存储 token
        userStore.setToken(res.data!.token);
        // // * 登录成功之后清除上个账号的 menulist 和 tabs 数据
        MenuStore.setMenuList([]);
        // tabStore.closeMultipleTab();
        message.success('登录成功！');
        router.push({ name: 'Home' });
      } finally {
        loading.value = false;
      }
    }
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    console.log(formEl);
    if (!formEl) return;
    formEl.resetFields();
  };
</script>
<style scoped lang="less">
  @import './index.scss';
</style>
