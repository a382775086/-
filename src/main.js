import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);


import First from './component/thirdcomponent.vue'

//import zjl from "./component/zjl.vue"
const zjl = ()=>import ("./component/zjl.vue")

//import cyx from "./component/cyx.vue"
const cyx = ()=>import ("./component/cyx.vue")

const zek = ()=>import ("./component/zek.vue")

const maroon5 = ()=>import ("./component/maroon5.vue")

const aw = ()=>import ("./component/aw.vue")

const other = ()=>import ("./component/other.vue")

import player from "./component/player.vue"



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {path:'/',
      component:First},

      {path:"/first/zjl",
      component:zjl},

      {path:"/first/cyx",
      component:cyx},

      {path:"/first/zek",
      component:zek},

      {path:"/first/maroon5",
      component:maroon5},
      
      {path:"/first/aw",
      component:aw}, 

      {path:"/first/other",
      component:other}, 

      {path:"/first/player",
      name:"player",
      component:player}
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
