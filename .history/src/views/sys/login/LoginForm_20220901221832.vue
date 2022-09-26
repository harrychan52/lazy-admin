<template>
  <Form>
    <FormItem>
      <Input size="large" v-model:value="formData.account" placeholder="请输入账号" />
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
  import { TagsForm, Button, input } from 'ant-design-vue';

  const FormItem = Form.Item;
  const formData = reactive({
    account: 'vben',
    password: '123456',
  });
</script>
