import Vue from 'vue'
import Router from 'vue-router'
import StudentManage from '@/components/content/StudentManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StudentManage',
      component: StudentManage
    }
  ]
})
