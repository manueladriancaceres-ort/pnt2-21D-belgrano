<template>
  <div>
      <h2>Sistema</h2>
      Nombre en sistema <input type="text" v-model="nombre">
  </div>
  
</template>

<script>
export default {
    data() {
        return {
            nombre: ''
        }
    }
}
</script>

<style>

</style>