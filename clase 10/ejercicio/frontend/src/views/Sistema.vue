<template>
  <div>
      <h2>Sistema</h2>
      <button @click="cargarlista">Cargar lista</button>
      <li v-for="producto in lista" :key="producto.codigo">
          {{ producto.codigo }} {{ producto.desc }} <button @click="eliminar(producto.codigo)" >Eliminar</button>
      </li>
      <p>
          Codigo <input type="text" v-model="producto.codigo">
          Descripcion <input type="text" v-model="producto.desc">
          <button @click="agregar">Agregar</button>
      </p>
  </div>
  
</template>

<script>
import apiClient from '../services/productoSevice.js'

export default {
    data() {
        return {
            lista: {},
            producto: {codigo:0,desc:''}
        }
    },
    methods: {
        async cargarlista() {
            try {
                const datos = await apiClient.getProductos();
                this.lista = datos.data;
            } catch(error) {
                console.log(error);
            }
        },
        async agregar() {
            try {
                const producto = {...this.producto};
                const data = await apiClient.setProducto(producto);
                this.lista.push(producto);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminar(codigo) {
            try {
                const data = await apiClient.deleteProducto(codigo);
                console.log(data);
                const listaCodigos = this.lista.map(e => {return e.codigo});
                const indice = listaCodigos.indexOf(codigo);
                this.lista.splice(indice,1);
            } catch (error) {
                console.log(error);                
            }
        }
    }
}
</script>

<style>

</style>