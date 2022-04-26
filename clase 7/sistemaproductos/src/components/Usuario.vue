<template>
  <div>
      Usuario {{ $route.params.id }}
      <button @click="menuProducto">Ir a Producto</button>
  </div>
</template>

<script>
export default {

  methods: {
    menuProducto() {
      this.$router.push('/producto');
    }
  }

}
</script>

<style>

</style>