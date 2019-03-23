import Vue from 'vue'
import VueRouter from 'vue-router'

import Score from './components/Score.vue';
import Players from './components/Players.vue';

import App from './App.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/footscore', component: Score },
  { path: '/footplayers', component: Players }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
