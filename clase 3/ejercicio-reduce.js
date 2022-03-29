// reduce

const personas = [
    { nombre: "Juan", apllido: "Gome", scoring: 10},
    { nombre: "Pedro", apllido: "Roca", scoring: 12},
    { nombre: "Jarlos", apllido: "Asis", scoring: 12},
    { nombre: "Maria", apllido: "Gonzales", scoring: 11},
    { nombre: "Juana", apllido: "Gomez", scoring: 11},
]

// calcular la suma de los scoring

const sumaScoring = personas.reduce((suma,persona) => suma + persona.scoring, 0 );
console.log(sumaScoring);

//
//  crear una funcion que devuelva el promedio del scoring de las personas
//  utilizando reduce
// 

function promedioScoring(personas){
    const sumaScoring = personas.reduce((suma,persona) => suma + persona.scoring, 0);
    return sumaScoring/personas.length;
}
console.log(promedioScoring(personas));
