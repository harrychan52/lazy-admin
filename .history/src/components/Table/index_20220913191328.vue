<template>
  <Table
    ref="tableRef"
    v-bind="getBindValues"
    :columns="innerColumns"
    :data-source="tableData"
    @change="handleTableChange"
  >
    <template v-for="(_, slotName) of $slots" #[slotName]="slotData" :key="slotName">
      <slot :name="slotName" v-bind="slotData"></slot>
    </template>
    <template #bodyCell="slotData">
      <slot name="bodyCell" v-bind="slotData"></slot>
    </template>
  </Table>
</template>
<script lang="tsx" setup>
  import { Table } from 'ant-design-vue';
</script>
