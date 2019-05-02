import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 重定向
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        header:Header,
        main:Home
      }
    }
  ]
})
