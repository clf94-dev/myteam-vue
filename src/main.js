import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'  

import VueRouter from 'vue-router'

import Vuelidate from 'vuelidate';


import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue' 

import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);



const routes=[
  {path:'/', component: Home},
  {path:'/home', component: Home},
  {path:'/about' ,component: About},
  {path:'/contact', component: Contact}
];

const router=new VueRouter({
  routes, mode:'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

new Vue({
  router,render: h => h(App),
  created() {
    AOS.init();
  }
}).$mount('#app')
