import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/example'
    },
    {
        path: '/example',
        name: 'login',
        component:()=>import('../page/com/father.vue')
        // component:()=>import('../page/api/shadowReactive.vue')
        // component:()=>import('../page/api/watchEffect.vue')
        // component:()=>import('../page/api/watch.vue')
        // component:()=>import('../page/api/computed.vue')
        // component:()=>import('../page/api/toRefs.vue')
        // component:()=>import('../page/api/toRef.vue')
        // component:()=>import('../page/api/reactive.vue')
        // component:()=>import('../page/api/ref.vue')
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})