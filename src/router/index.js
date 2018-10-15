import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/button/buttonDemo'
import Input from '@/components/input/InputDemo'
import Checkbox from '@/components/checkbox/CheckboxDemo'
import Radio from '@/components/radio/RadioDemo'

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
    {
      path: '/Checkbox',
      name: 'checkbox',
      component: Checkbox
    },
    {
      path: '/Radio',
      name: 'radio',
      component: Radio
    },
  ]
})
