import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Sistema from '../views/Sistema.vue'
import CarritoCompras from '../views/CarritoCompras.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/sistema', component: Sistema },
    { path: '/carrito', component: CarritoCompras },
]
  
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router