<template>
  <Table
    ref="tableRef"
    v-bind="getBindValues"
    :columns="innerColumns"
    :data-source="tableData"
    @change="handleTableChange"
  >
    <template v-for="item in Object.keys($slots)" #[item]="data" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #bodyCell="data">
      <slot name="bodyCell" v-bind="data"></slot>
    </template>
  </Table>
</template>
<script lang="tsx" setup>
  import { ref, computed, unref } from 'vue';
  import { useAttrs } from 'vue';

  import { Table } from 'ant-design-vue';

  const attrs = useAttrs();
  const getBindValues = computed(() => {
    let propsData: Recordable = {
      ...attrs,
    };

    return propsData;
  });
</script>
