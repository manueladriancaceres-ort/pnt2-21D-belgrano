const objVuejs = Vue.createApp({
    data() {
      return {
        mensajeBienvenida: 'Hola mundo!',
        otroMensaje: 'Otro mensaje mas',
        numero: 10,
        ok: true,
        ver: false,
        miColor: {color:"red"}
      }
    },
    methods: {
        incrementar() {
            this.numero ++;
            return this.numero;
        },
        cambiarColor() {
            this.miColor = {color:"green"}
        }
    },
    mounted() {
        console.log("Al cargarse el componente, ver");
    }
}).mount('#app')