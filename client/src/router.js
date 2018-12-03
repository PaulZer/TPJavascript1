import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

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
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/apihome',
            name: 'apihome',
            component: () => import('./views/api/ApiHome.vue')
        },
        {
            path: '/category/:id/animals',
            name: 'category',
            component: () => import('./views/api/Category.vue')
        },
        {
            path: '/animal/:id',
            name: 'animal',
            component: () => import('./views/api/Animal.vue')
        }
    ]
});
