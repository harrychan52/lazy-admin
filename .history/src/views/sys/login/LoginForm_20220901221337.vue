<template>
  <Form>
    <FormItem>
      <Input size="large" v-model:value="formData.account" placeholder="请输入账号" />
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
  import { Form, Button, input } from 'ant-design-vue';

  const FormItem = Form.Item;
</script>
