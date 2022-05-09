<script setup>
import Sistema from "./components/Sistema.vue";
</script>

<template>

  <div>
    <p>
      <router-link to="/">Sistema</router-link> |
      <router-link to="/producto">Producto</router-link> |
      <router-link to="/servicio">Servicio</router-link> |
      <router-link to="/usuario">Usuario</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
