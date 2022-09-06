<template>
  <a-form :model="formData" ref="formRef" size="large" layout="horizontal">
    <a-form-item name="account">
      <a-input size="large" v-model:value="formData.account" placeholder="请输入账号" />
    </a-form-item>
    <a-form-item name="password">
      <a-input-password size="large" v-model:value="formData.password" placeholder="请输入密码" />
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
  import { reactive, ref, unref, computed } from 'vue';

  import { Form, Input, Button } from 'ant-design-vue';

  const formData = reactive({
    account: 'lazy',
    password: '123456',
  });
  // const FormItem = Form.Item;
  // const InputPassword = Input.Password;
</script>
