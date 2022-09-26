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
  import { useSlots } from 'vue';
  import { Table } from 'ant-design-vue';
  import {
    useTableMethods,
    createTableContext,
    useExportData2Excel,
    useTableForm,
    useTableState,
    useColumns,
    useEditable,
  } from './hooks';
  import { ToolBar } from './components';
  import { dynamicTableProps, dynamicTableEmits } from './dynamic-table';
  import type { TableActionType } from './types';
  import { SchemaForm } from '@/components/core/schema-form';

  defineOptions({
    name: 'DynamicTable',
    inheritAttrs: false,
  });

  const props = defineProps(dynamicTableProps);
  const emit = defineEmits(dynamicTableEmits);
  const slots = useSlots();

  // 表格内部状态
  const tableState = useTableState({ props, slots });
  const { tableData, queryFormRef, editTableFormRef, getBindValues, editFormModel } = tableState;
  // 表格内部方法
  const tableMethods = useTableMethods({ state: tableState, props, emit });
  const { setProps, fetchData, handleSubmit, reload, handleTableChange, handleEditFormValidate } =
    tableMethods;
  // 控制编辑行
  const editableHooks = useEditable({ props, state: tableState });

  const tableAction: TableActionType = {
    setProps,
    reload,
    fetchData,
    ...editableHooks,
  };

  // 表格列的配置描述
  const { innerColumns } = useColumns({
    props,
    slots,
    state: tableState,
    methods: tableMethods,
    tableAction,
  });

  // 搜索表单
  const { getFormProps, replaceFormSlotKey, getFormSlotKeys } = useTableForm({
    tableState,
    tableMethods,
    slots,
  });

  // 表单导出
  const exportData2ExcelHooks = useExportData2Excel({
    props,
    state: tableState,
    methods: tableMethods,
  });

  // 当前组件所有的状态和方法
  const instance = {
    ...props,
    ...tableState,
    ...tableMethods,
    ...editableHooks,
    ...exportData2ExcelHooks,
    emit,
  };

  createTableContext(instance);

  fetchData();

  defineExpose(instance);
</script>
