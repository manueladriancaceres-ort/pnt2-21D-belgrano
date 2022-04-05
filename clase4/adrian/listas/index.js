const objVuejs = Vue.createApp({
    data() {
      return {
          productos: [
              {id:11,desc:"Zapatilla",precio:20000},
              {id:24,desc:"Remera",precio:3000},
              {id:33,desc:"Pantalon",precio:5000}
          ],
          producto: {
              id: 0, desc:'', precio:0 
          }
      }
    },
    methods: {
        ordenarPorPrecio() {
            this.productos.sort((a,b)=>a.precio-b.precio);
        },
        agregarProducto() {
            this.productos.push({id: this.producto.id, 
                desc: this.producto.desc, precio: this.producto.precio});
        }
    },
    mounted() {
        console.log("Listas");
    }
}).mount('#app')