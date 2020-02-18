import Vue from 'vue';
import App from './app.vue';
import router from './routers/index';
import * as idoDesign from '../src/index';
import locale from '../utils/locale/lang/zh-CN';

Vue.use(idoDesign, {
  locale,
  capture: true
});

// 开启debug模式
Vue.config.debug = true;

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
