import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Sistema from '../views/Sistema.vue'
import CarritoCompras from '../views/CarritoCompras.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/carrito', component: CarritoCompras },
    { path: '/login', component: Login },
    { path: '/sistema', component: Sistema, meta: { RequireAuth: true} },
    { path: '/logout', component: Logout,  meta: { RequireAuth: true}  },
]
  
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

router.beforeEach((to,from,next) => {
    const usuarioLog = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioLog);
    if( to.matched.some(r => r.meta.RequireAuth) && !usuario ) {
        next('/')
    }
    next()
})

export default router