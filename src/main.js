// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '../store'
import Mint from 'mint-ui';

Vue.use(Mint)

Vue.config.productionTip = false
Vue.directive('ajax-index', function () {
  axios.get('/v2/page?pageId=1&tabId=1&_=1539857081898').then(resp=>{
    		console.log(resp.data)
    	})
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
