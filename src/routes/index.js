import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', // https://google.com/#/
      component: () => import('./Home.vue')
    },
    {
      path: '/table/:hello', // https://google.com/#/table
      component: () => import('./Table.vue')
    }
  ]
})
