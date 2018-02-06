import Vue from 'vue'
import Router from 'vue-router'
// const Index = () => import('@/views/index.vue')
// const Login = () => import('@/views/login.vue')

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('@/views/index.vue'),
        },
        {
            path: '/array',
            name: 'Array',
            component: () => import('@/views/Array'),
        },
        {
            path: '/obj',
            name: 'Object',
            component: () => import('@/views/Obj'),
        },
        {
            path: '/html',
            name: 'Html',
            component: () => import('@/views/Html'),
        },
        {
            path: '/str',
            name: 'Str',
            component: () => import('@/views/Str'),
        },
        {
            path: '/url',
            name: 'Url',
            component: () => import('@/views/Url'),
        },
        {
            path: '/curry',
            name: 'Curry',
            component: () => import('@/views/Curry'),
        },
        {
            path: '/format',
            name: 'Format',
            component: () => import('@/views/Format'),
        },
        {
            path: '/color',
            name: 'Color',
            component: () => import('@/views/Color'),
        },
        {
            path: '/check',
            name: 'Check',
            component: () => import('@/views/Check'),
        },
        {
            path: '/is',
            name: 'Is',
            component: () => import('@/views/Is'),
        },
    ]
})


export default router