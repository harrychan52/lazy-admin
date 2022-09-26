<template>
  <ConfigProvider :locale="i18nLocale">
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import zhCn from 'ant-design-vue/es/locale/zh_CN';
  import en from 'ant-design-vue/es/locale/en_US';
  import { computed } from 'vue';

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
