console.log("ES6");

const unaLista = [12,34,20];

// esto no se puede hacer
// unaLista = "algo";

unaLista[1] = "otra cosa";
unaLista.push(45);
console.log(unaLista);

// apunta al mismo objeto en memoria
const otraLista = unaLista;
otraLista[3] = 40;
console.log(unaLista);
console.log(otraLista);

// evitar que se modifiquen los objetos
Object.freeze(unaLista);
unaLista[0] = "intento cambiar";
console.log("Despues del freeze" ,unaLista);

// objectos
const persona = {
    nombre: "Carlos",
    apellido: "Gomez",
    direccion: "San Martin 123"
}

console.log(persona);
persona.codigoPostal = "1900";
console.log(persona);
delete persona.direccion;
console.log(persona);

// Ejercicio 1, crear un objeto 

// funciones
const unaVariable = function() {
    return "Una funcion anonima"
}
console.log(unaVariable());

// Ejercicio 2, crear una funcion anonima
const unaVariable2 = () => "Algun Texto";
console.log(unaVariable2());

// Ejercicio 3, pasar a funcion flecha 

// Funciones con parametros rest

// public int calcular(int numero)
// public double calcular(double numero)
// public ArrayLista<Cliente> calcular(int desde, int hasta)

function calcular(...args) {
    return "Cantidad de argumentos " + args.length;
}

console.log(calcular("algo",4,true,34));

// Desestructuración de objetos
const persona1 = {
    nombre: "1Carlos",
    apellido: "1Gomez",
    direccion: "1San Martin 123",
    getApellidoNombre: function() {
        return nombre + " " + apellido;
    },
    getListaTel: function() {
        return [{"casa":12424},{"cel":12344}]
    }
}
const {nombre,apellido,direccion} = persona1;
console.log(nombre);
console.log(apellido);
console.log(direccion);
console.log(persona1.getApellidoNombre());
console.log(persona1.getListaTel());

//  Consigna ejercicio

const proceso = {
    facturas: [{codigo:1,desc:"medias",importe: 1000},
               {codigo:2,desc:"zapas",importe: 20000},
               {codigo:3,desc:"remera",importe: 5000}] ,
    recibos: [ { codigo:1, numFacutra: 1, importe: 800},
               { codigo:2, numFacutra: 3, importe: 5000}, 
                  ],
    getCalcularSaldoFacturas: function() {
        // todas
    },
    getTraerFacturasImpagas: function() {
        // solo impagas    
    }
}





















