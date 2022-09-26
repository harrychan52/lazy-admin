import type { App } from 'vue';
import { Input, Layout, Form } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
export function registerGlobComp(app: App) {
  app.use(Input).use(Layout).use(Form);
}
