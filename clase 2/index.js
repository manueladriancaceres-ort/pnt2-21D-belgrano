console.log("ES6");

const unaLista = [12,34,20];

// esto no se puede hacer
// unaLista = "algo";

unaLista[1] = "otra cosa";
unaLista.push(45);
console.log(unaLista);

// apunta al mismo objeto en memoria
const otraLista = unaLista;
otraLista[2] = 40;
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












