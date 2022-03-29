console.log("programacion funcional");

// No realizar mutaciones en variables publica o en parametros

const numeros = [4,10,13,15,1,6];
numeros.forEach( numero => console.log(numero) );

// Muta el arreglo numeros, no recomendable
// numeros.sort( (a,b) => a -b );
// console.log(numeros);

// Realizar una funcion que devuelva un arreglo de numeros ordenado
// utilizando sort

// forEach para copiar , alternativa 1
// asignar otra variable, alternativa 2

function copiaOrdenada(numeros) {
    const numerosOrdenados = [...numeros];
    numerosOrdenados.sort((a,b) => a - b);
    return (numerosOrdenados);
}

console.log(copiaOrdenada(numeros));