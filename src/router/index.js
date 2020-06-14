import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ListPosts from '@/components/ListPosts'
import ViewPost from '@/components/ViewPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }, 
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/posts',
      name: 'ListPosts',
      component: ListPosts
    },
    {
      path: '/posts/:id',
      name: 'ViewPost',
      component: ViewPost
    },
    {
      path:'*',
      component:{
        template:'<h1>Page not found !!!</h1>'
      }
    }
  ],

  mode:'history'
})
