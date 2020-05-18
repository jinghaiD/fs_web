import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/HomePage/Home";
import House from "../components/HousePage/House";
import Search from "../components/SearchPage/Search";
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
      path: '/search',
      component: Search
    }
  ]
})
