import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import Events from './views/majorEvents.vue';
import localEvents from './views/localEvents';
import maps from './views/Maps';

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
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/events',
      name: 'majorEvents',
      component: Events
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
    }
  ]
});



