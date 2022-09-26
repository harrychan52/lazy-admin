<template>
  <Table
    ref="tableRef"
    v-bind="getBindValues"
    :columns="innerColumns"
    :data-source="tableData"
    @change="handleTableChange"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #bodyCell="slotData">
      <slot name="bodyCell" v-bind="slotData"></slot>
    </template>
  </Table>
</template>
<script lang="tsx" setup>
  import { Table } from 'ant-design-vue';
</script>
