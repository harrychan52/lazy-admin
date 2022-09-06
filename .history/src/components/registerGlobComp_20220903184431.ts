import type { App } from 'vue';
import { Input, Layout, Form } from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app.use(Input).use(Layout).use(Form);
}
