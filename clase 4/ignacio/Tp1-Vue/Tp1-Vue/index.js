const app=Vue.createApp({
    data() {
      return {
        facturas: 
            {
                codFactura: 1, 
                numCliente:'999', 
                items: [{descripcion:'item1'}],
            }
        ,

        item: {
            descripcion : ''
        }
           
      }
    },
    methods: {
        agregarItem(){
            this.facturas.items.push({
                descripcion: this.item.descripcion
            });
        }
    },
    mounted(){

    }
  }).mount('#app')
