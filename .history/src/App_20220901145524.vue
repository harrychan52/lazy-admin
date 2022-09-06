<template>
  <ConfigProvider :locale="i18nLocale">
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue';
  import { useUserStoreWithOut } from '/@/store/modules/user';

  import 'dayjs/locale/zh-cn';
  // support Multi-language
  const i18nLocale = computed((): any => {
    if (globalStore.language && globalStore.language == 'zh') return zhCn;
    if (globalStore.language == 'en') return en;
    return '';
  });
</script>
