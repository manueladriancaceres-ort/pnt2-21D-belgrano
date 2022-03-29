// Ejercicio combinado

const personas = [
    { nombre: "Juan", apllido: "Gome", scoring: 10},
    { nombre: "Pedro", apllido: "Roca", scoring: 12},
    { nombre: "Jarlos", apllido: "Asis", scoring: 12},
    { nombre: "Maria", apllido: "Gonzales", scoring: 11},
    { nombre: "Juana", apllido: "Gomez", scoring: 11},
]

//
// crear una funcion que devuelva
// nombre y apellido de personas con scoring menor a 12
// en una nueva lista
// combinar map y filter
//


/* revisar
function listaScoringMenorA12(personas,topeScoring){
    const listanueva = personas.map(persona => persona.personas.filter(
        persona => persona.scoring < topeScoring ));
    return listanueva;    
}
console.log(listaScoringMenorA12(personas,10));
*/


function filtroPersonasScoring(personas, numero){
    const personasPorNombreYApellido = personas.filter(persona => persona.scoring < numero).map(persona => ({ nombre : persona.nombre , apellido: persona.apllido}));
    return personasPorNombreYApellido;
}

console.log(filtroPersonasScoring(personas, 12));

