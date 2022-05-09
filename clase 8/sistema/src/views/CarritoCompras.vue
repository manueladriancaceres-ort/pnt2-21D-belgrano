<template>
  <div>
    <div>
      {{ contador }}
      <button @click="aumentar(10)">Cambio</button>
    </div>
    <div>
      <h2>Carrito</h2>
      {{ lista }}
      Codigo <input type="text" v-model="producto.codigo">
      Descripcion <input type="text" v-model="producto.desc">
      <button @click="comprar">Agregar compra</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/store.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useStore();
    const { contador, lista } = storeToRefs(store);
    const { pordiez, aumentar, agregarCompra } = store;
    return { store, contador, lista, pordiez, aumentar, agregarCompra,
    };
  },
  data() {
    return {
      producto: { codigo: 10, desc: "algo" },
    };
  },
  methods: {
    comprar() {
      this.agregarCompra({...this.producto});
    },
  },
};
</script>

<style>
</style>