<template>
  <div>
      <div v-if="!estaLogeado">
        <router-link to="/">Go to Home</router-link> |
        <router-link to="/about">Go to About</router-link> |
        <router-link to="/carrito">Carrito de compras</router-link> |
        <router-link to="/login">Login</router-link>  |
      </div>

      <div v-if="estaLogeado">
        <router-link to="/sistema">Go to Sistema</router-link> |
        <router-link to="/logout">Logout</router-link> 
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { loginStore } from "./store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  name: "Login",
  setup() {
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    return {
      store,
      estaLogeado,
    };
  },
};
</script>


<style>
</style>
