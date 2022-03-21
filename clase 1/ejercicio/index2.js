let variableMateo = "Mateo"
for(let index = 0; index < 5; index++) {
    console.log(variableMateo[index]);
}

// En javaScript los string
// son inmutables.

variableMateo[0] = "m";

console.log(variableMateo);

otraVariable = "m" + variableMateo[1];

console.log(otraVariable);

// desafio, en otra variable
// concatenar, que quede "mateo"
// con un ciclo comun

// ciclo desde 1 hasta variableMateo.length incremento 1
// concatenar en una variable
// mostrar el resultado "mateo"


// version 1
/*
let resultado = "m";
for(let i=1; i< variableMateo.length; i++ ) {
    resultado += variableMateo[i];
}
console.log(resultado);
*/

// version 2
let salida = "";
for (let index = 0; index < variableMateo.length; index++) {
    salida += variableMateo[index];
}
console.log(salida );



// version 3


// version 4


