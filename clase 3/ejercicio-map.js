// map

const personas = [
    { nombre: "juan", apllido: "Gomez", scoring: 10},
    { nombre: "Pedro", apllido: "Roca", scoring: 12},
    { nombre: "Carlos", apllido: "Asis", scoring: 12},
    { nombre: "Mariz", apllido: "Gonzales", scoring: 11},
]

const scoring = personas.map( persona => persona.scoring );

console.log(personas);
console.log(scoring);

//
// Ejercicio, hacer una funcion que retorne una lista
// con scoring + 10
// 

function listaAumentandoScoring(personas,aumento) {
    const scoringConAumento = personas.map(persona => persona.scoring + aumento);
    return scoringConAumento;
}

console.log(personas);
console.log(listaAumentandoScoring(personas,10));


