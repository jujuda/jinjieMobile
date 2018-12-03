import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import '@/assets/css/reset.css'/*引入公共样式*/
import $ from 'jquery'
import 'lib-flexible';
Vue.config.productionTip = false
import axios from 'axios';
Vue.prototype.$http=axios;
axios.defaults.withCredentials=true; //全局配置携带跨源凭证

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
