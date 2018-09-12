import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import { Toast } from 'vant';

import App from './App.vue';
import router from './router';
import store from './store/store';
import Page from './components/Page';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(Toast);

Vue.component('page', Page);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
