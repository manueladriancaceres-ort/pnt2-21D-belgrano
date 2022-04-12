<template>
  <div>
    Codigo <input v-model="gestion.codigo" type="text" /> Nombre
    <input v-model="gestion.nombre" type="text" /> Tipo
    <input v-model="gestion.tipo" type="text" />
    <button @click="agregar">Agregar</button>
  </div>
</template>

<script>
export default {
  emits: ['agregar'],
  data() {
    return {
      gestion: { codigo: 0, nombre: "", tipoGestion: "" },
    };
  },
  methods: {
    agregar() {
      this.$emit("agregar",this.gestion);
    },
  },
};
</script>

<style>
</style>