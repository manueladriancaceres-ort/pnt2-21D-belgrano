const celular = {
    camara: "300 mpx",
    alto: 16.48,
    color: "Gris",
    bluethooth: true,

}

const funcion = () => {
    return celular;
}

console.log(funcion());


// consigna clase
const proceso = {
    facturas: [{ codigo: 1, desc: "medias", importe: 1000 },
    { codigo: 2, desc: "zapas", importe: 20000 },
    { codigo: 3, desc: "remera", importe: 5000 }],
    recibos: [{ codigo: 1, numFacutra: 1, importe: 800 },
    { codigo: 3, numFacutra: 3, importe: 5000 },
    ],
    getCalcularSaldoFacturas: function () {
        // todas
        let saldoFactura = 0;
        proceso.facturas.forEach(element => {
            saldoFactura = element.importe + saldoFactura;
        });

        return saldoFactura;
    },
    getTraerFacturasImpagas: function () {
        // solo impagas    
        
        let facturasImpagas = [];

        proceso.facturas.forEach(element => {
        
        let i = 0;
        let condicional = false;

        while(i<this.recibos.length && condicional === false){
            if(element.codigo === this.recibos[i].codigo && element.importe === this.recibos[i].importe){
                condicional = true;
            }
            else{
                i++;
            }
            
        }

        if(i>=this.recibos.length){
            facturasImpagas.push(element);
        }
        

        });

        return facturasImpagas;

    }


}

console.log("El total del importe a pagar es de : " + proceso.getCalcularSaldoFacturas());
console.log("Estas son las facturas impagas:");
console.log(proceso.getTraerFacturasImpagas());