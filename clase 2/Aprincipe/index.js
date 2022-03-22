const persona = {
    nombre: "Carlos",
    apellido: "Gomez",
    direccion: "San Martin 123"
}


// Ejercicio 1, crear un objeto 

// funciones
const unaVariable = function() {
    return persona.nombre;
}
console.log(unaVariable());

// Ejercicio 2, crear una funcion anonima
const unaVariable2 = () => "Algun Texto";
console.log(unaVariable2());

// Ejercicio 3, pasar a funcion flecha 

const unaVariable3 = () => persona.nombre;
console.log(unaVariable3());