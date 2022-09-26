import type { PropType } from 'vue';

export const basicProps = {
  title: {
    type: [String, Function] as PropType<string | ((data: Recordable) => string)>,
    default: null,
  },
  dataSource: {
    type: Array as PropType<Recordable[]>,
    default: null,
  },
  columns: {
    type: Array,
    default: null,
  },
};
