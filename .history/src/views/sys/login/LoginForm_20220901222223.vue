<template>
  <Form :model="formData" ref="formRef" @keypress.enter="handleLogin">
    <FormItem name="account" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.account"
        :placeholder="t('sys.login.userName')"
        class="fix-auto-fill"
      />
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
  import { reactive, ref, unref, computed } from 'vue';

  import { Form, Input, Button } from 'ant-design-vue';

  const formData = reactive({
    account: 'vben',
    password: '123456',
  });
</script>
