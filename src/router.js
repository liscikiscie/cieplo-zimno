import Vue from 'vue'
import Router from 'vue-router'
import Books from './views/Books.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Announcements from './views/Announcements.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Books',
            component: Books
        },
        {
            path: '/zapowiedzi',
            name: 'Announcements',
            component: Announcements
        },
        {
            path: '/onas',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/kontakt',
            name: 'Contact',
            component: Contact
        },
    ]
})
