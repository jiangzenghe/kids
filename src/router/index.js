import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/IndexView.vue')
    },
    {
        path: '/toddler',
        name: 'toddler',
        component: () => import('../views/ToddlerView.vue'),
    },
    // {
    //     path: '/product/productId/:productId',
    //     name: 'productDetails',
    //     component: () => import("../views/ProductDetailsView.vue")
    // },
    {
        path: '/preschool',
        name: 'preschool',
        component: () => import('../views/PreschoolView.vue')
    },
    {
        path: '/faculty',
        name: 'faculty',
        component: () => import('../views/FacultyView.vue')
    },
    // {
    //     path: '/news/newsId/:newsId',
    //     name: 'newsDetails',
    //     component: () => import('../views/NewsDetailsView.vue')
    // },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
