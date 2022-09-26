<template>
  <Form :model="formData" ref="formRef">
    <FormItem name="account">
      <Input v-model:value="formData.account" placeholder="请输入账号" />
    </FormItem>
    <FormItem name="password">
      <InputPassword v-model:value="formData.password" placeholder="请输入密码" />
    </FormItem>
  </Form>
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
