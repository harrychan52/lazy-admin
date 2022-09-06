<template>
  <ConfigProvider :locale="i18nLocale">
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue';
  import { useUserStoreWithOut } from '/@/store/modules/user';

  import 'dayjs/locale/zh-cn';

  const userStore = useUserStoreWithOut();

  // support Multi-language
  const i18nLocale = computed((): any => {
    if (userStore.language && userStore.language == 'zh') return zhCn;
    if (userStore.language == 'en') return en;
    return '';
  });
</script>
