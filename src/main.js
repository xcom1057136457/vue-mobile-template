import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import 'lib-flexible'
import moment from 'moment'
import * as filters from './util/filters'
import './util/permission'
import 'animate.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import { Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';

Locale.use('en-US', enUS);

import request from './util/request'
Vue.prototype.$http = request;

// 格式化moment
moment.locale('zh-cn');

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')