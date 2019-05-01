import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import majorEvents from './views/majorEvents.vue';
import localEvents from './views/localEvents';
import maps from './views/Maps';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/majorEvents',
      name: 'majorEvents',
      component: majorEvents
    },
    {
      path: '/localEvents',
      name: 'localEvents',
      component: localEvents
    },
    {
      path: '/Maps',
      name: 'Maps',
      component: maps
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
});



