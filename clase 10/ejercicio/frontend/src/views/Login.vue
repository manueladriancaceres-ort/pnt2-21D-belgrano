<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <p>nombre <input type="text" v-model="usuario.name"></p>
            <p>usuario <input type="email" v-model="usuario.email"></p>
            <p>contraseña <input type="password" v-model="usuario.password"> </p>
            <button type="submit" >Login</button>
        </form>
    </div>
</template>

<script>
import { loginStore } from "../store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  name: "Login",
  setup() {
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    const { login } = store;
    return {
      store,
      estaLogeado,
      login
    };
  },
  data() {
    return {
        usuario: { name: "", email: "",  password: "" }
    }
  },
  methods: {
      async login() {
          await this.login({...this.usuario});
          if(this.estaLogeado) {
            this.$router.push('/sistema')
          } else {
            this.$router.push('/')
          }
      }
  }
};
</script>

<style>
</style>