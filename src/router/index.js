import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/HomePage/Home";
import House from "../components/HousePage/House";
import Search from "../components/SearchPage/Search";
import User from "../components/UserPage/User";
import Admin from "../components/AdminPage/Admin";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/house/:houseid',
      component: House
    },
    {
      path: '/search/:city',
      component: Search
    },
    {
      path: '/user/:username',
      component: User
    },
    {
      path: '/admin/',
      component: Admin
    }
  ]
})
