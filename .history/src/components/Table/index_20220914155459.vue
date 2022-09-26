<template>
  <Table ref="tableRef" v-bind="getBindValues" :columns="tableColumns" :data-source="tableData">
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
  import { basicProps } from './props';

  import { Table } from 'ant-design-vue';

  const props = defineProps(basicProps);
  console.log(props);

  const tableColumns = ref<any[]>([]);
  const tableData = ref<any[]>([]);
  const tableData = props.dataSource.map(item=>{
    return
  });
  const attrs = useAttrs();
  const getBindValues = computed(() => {
    let propsData: Recordable = {
      ...attrs,
    };

    return propsData;
  });
</script>
