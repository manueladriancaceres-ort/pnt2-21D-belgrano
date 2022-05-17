<template>
  <div>
    <button @click="logout">Salir</button>
  </div>
</template>

<script>
import { loginStore } from "../store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    const { logout } = store;
    return {
      store,
      estaLogeado,
      logout,
    };
  },
  methods: {
    logout() {
        this.logout();
        this.$router.push('/')
    },
  },
};
</script>

<style>
</style>