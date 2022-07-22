import Vue from 'vue';
import Antd from 'ant-design-vue';

import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'ant-design-vue/dist/antd.css';
import store from '@/store';

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
