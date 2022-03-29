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
        // agregar propiedad saldo (importe factura - importe recibo ) (uno a uno)
        const nuevaFactura = proceso.facturas.map( factura => ({ 
            codigo: factura.codigo, 
            importe: factura.importe,
            pagado: proceso.recibos.filter(recibo => recibo.numFacutra === factura.codigo).map(recibo => recibo.importe)[0] == undefined ? 0 :
            proceso.recibos.filter(recibo => recibo.numFacutra === factura.codigo).map(recibo => recibo.importe)[0],
            saldo: factura.importe - (proceso.recibos.filter(recibo => recibo.numFacutra === factura.codigo).map(recibo => recibo.importe)[0] == undefined ? 0 :
            proceso.recibos.filter(recibo => recibo.numFacutra === factura.codigo).map(recibo => recibo.importe)[0]),
        }) );
        return nuevaFactura;
        
    },
    getTraerFacturasImpagas: function() {
        // solo impagas    
        const facturasImpagas = this.getCalcularSaldoTodasLasFacturas();
        return facturasImpagas.filter(f => f.saldo != 0);
    },
    // revisar
    getTotalFacturasImpgas: function() {
        return this.getTotalFacturasImpgas().reduce((sum,factura) => (sum+factura.saldo),0 );
    }

}

console.log(proceso.getCalcularSaldoTodasLasFacturas());
console.log(proceso.getTraerFacturasImpagas());
// console.log(proceso.getTotalFacturasImpgas());