import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { registerGlobComp } from '/@/components/registerGlobComp';
import { setupStore } from '/@/store';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  // 配置 store
  setupStore(app);

  // Register global components
  // // 注册全局组件
  registerGlobComp(app);

  // // Multilingual configuration
  // // 多语言配置
  // // Asynchronous case: language files may be obtained from the server side
  // // 异步案例：语言文件可能从服务器端获取
  // await setupI18n(app);

  // // Configure routing
  // // 配置路由
  setupRouter(app);

  // // router-guard
  // // 路由守卫
  setupRouterGuard(router);

  // // Register global directive
  // // 注册全局指令
  // setupGlobDirectives(app);

  // // Configure global error handling
  // // 配置全局错误处理
  // setupErrorHandle(app);

  app.mount('#app');
}

bootstrap();
