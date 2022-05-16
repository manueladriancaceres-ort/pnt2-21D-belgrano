<script setup>
</script>

<template>
  <div>
    <p>
      <router-link to="/">Go to Home</router-link> |
      <router-link to="/about">Go to About</router-link> |
      <router-link to="/sistema">Go to Sistema</router-link> |
      <router-link to="/carrito">Carrito de compras</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
