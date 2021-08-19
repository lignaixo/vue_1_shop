import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入axios
import axios from 'axios'
axios.defaults.baseURL = "http://xzserver.applinzi.com";
//如果在客户端使用http代理跨域，baseURL不要写真实的服务器地址，而应该写http代替提供的接口地址的别名，比如: /api
// axios.defaults.baseURL = "http://localhost:8080/api";
Vue.prototype.axios = axios;

// 设置MyHeader为全局组件
import MyHeader from './components/MyHeader.vue'
Vue.component("my-header", MyHeader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
