// filter

const personas = [
    { nombre: "Juan", apllido: "Gome", scoring: 10},
    { nombre: "Pedro", apllido: "Roca", scoring: 12},
    { nombre: "Jarlos", apllido: "Asis", scoring: 12},
    { nombre: "Maria", apllido: "Gonzales", scoring: 11},
    { nombre: "Juana", apllido: "Gomez", scoring: 11},
]

const personasScoringAlto = personas.filter(persona => persona.scoring > 10 );

console.log(personasScoringAlto);
console.log(personas);

// 
// Ejercicio: crear una funcion que devuelva una lista nueva
// con nombre = 'Juan'  o apellido = 'Gomez'
// 

function filtrarPersonas(personas){
    const personasFiltradas = personas.filter(persona => persona.nombre === "Juan" || persona.apllido === "Gomez");          
    return personasFiltradas;
}

console.log(filtrarPersonas(personas));
console.log(personas);

