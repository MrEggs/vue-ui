import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/button/buttonDemo'
import Input from '@/components/input/InputDemo'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Button',
      name: 'button',
      component: Button
    },
    {
      path: '/Input',
      name: 'input',
      component: Input
    },
  ]
})
 