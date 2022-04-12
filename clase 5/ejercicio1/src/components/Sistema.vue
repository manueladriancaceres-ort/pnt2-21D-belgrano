<template>
  <Cabecera/>
  <Detalle v-for="gestion in listaGestiones" :key="gestion.codigo"
    :codigo="gestion.codigo" :nombre="gestion.nombre"/>
  <AgregarDetalle @agregar="agregar($event)"/>  
  <Pie :autor="autor"/>  
</template>

<script>
import Cabecera from './Cabecera.vue'
import Pie from './Pie.vue'
import Detalle from './Detalle.vue'
import AgregarDetalle from './AgregarDetalle.vue'
export default {
    components:{
        Cabecera, Pie, Detalle, AgregarDetalle
    },
    data() {
        return {
            autor: 'Autor desde el codigo',
            listaGestiones: [],
            gestion: {codigo:0,nombre:"",tipoGestion:""}
        }
    },
    methods: {
        agregar(obj) {
            const aux = {...obj};
            this.listaGestiones.push(aux);
        }
    }
}
</script>

<style>

</style>