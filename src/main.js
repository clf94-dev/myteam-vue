import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'  

import VueRouter from 'vue-router'

import Vuelidate from 'vuelidate';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
