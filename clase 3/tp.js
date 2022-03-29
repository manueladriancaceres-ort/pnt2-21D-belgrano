//
// pasar a programcion funcional
// con filter,map y reduce
// 

const proceso = {
    facturas: [{codigo:1,desc:"medias",importe: 1000},
               {codigo:2,desc:"zapas",importe: 20000},
               {codigo:3,desc:"remera",importe: 5000} ,
               {codigo:4,desc:"pantalon",importe: 10000},
               {codigo:5,desc:"campera",importe: 25000}] ,
    recibos: [ { codigo:1, numFacutra: 1, importe: 800},
               { codigo:2, numFacutra: 3, importe: 5000}, 
               { codigo:3, numFacutra: 5, importe: 25000}, 
                  ],
    getCalcularSaldoTodasLasFacturas: function() {
        const rta = []
        // agregar propiedad saldo (importe factura - importe recibo ) (uno a uno)
        return rta;
    },
    getTraerFacturasImpagas: function() {
        // solo impagas    
    },
    getTotalFacturasImpgas: function() {
        
    }

}

console.log(proceso.getCalcularSaldoTodasLasFacturas());
