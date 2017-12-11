// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

var store=new Vuex.Store({
	 state:{
	 	 isLogin:false,
	 	 username:""
	 },
	 mutations:{
	 	 login(state,userInfo){
	 	 	 state.isLogin=true
	 	 	 state.username=userInfo.email
	 	 }
	 }
})

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
