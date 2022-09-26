import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();
store.use(piniaPluginPersistedstate);


export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
