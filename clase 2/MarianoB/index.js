console.log("Hola soy mariano");

//Ejercicio1

const persona = {
    nombre: "Mariano",
    apellido: "Brusca",
    direccion: "Incognita??"
}
console.log(persona);

//Ejercicio2

const variableAnonima = () => {
    let nom = prompt("Ingresar nombre : ");
    let ape = prompt("Ingresa apellido : ");
    let dire = prompt("Ingresar direccion : ");
    const persona2 = {
        nombre : nom,
        apellido :ape,
        direccion :dire,
    }
    return persona2;
}

console.log(variableAnonima());

