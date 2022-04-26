import {createRouter,createWebHashHistory} from 'vue-router'
import Sistema from '../components/Sistema.vue'
import Producto from '../components/Producto.vue'
import Servicio from '../components/Servicio.vue'
import NotFound from '../components/NotFound.vue'
import Usuario from '../components/Usuario.vue'

const routes = [
    { path: '/', component: Sistema },
    { path: '/producto', component: Producto },
    { path: '/servicio', component: Servicio },
    { path: '/usuario/:id', component: Usuario },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

export default router
  