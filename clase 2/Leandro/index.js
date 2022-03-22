const usuario = {
    "nombre": "pedro",
    "apellido": "castillo",
    "edad": 30
}

console.log(usuario);
console.log(usuario.nombre);

const saludo = function() {
    return "Bienvenido " + usuario.nombre;
}

console.log(saludo());

const saludo2 = () => "Welcome " + usuario.apellido;
console.log(saludo2());

function contando(...args) {
    return "La cantidad de argumentos es de: " + args.length;
}

console.log(contando("pedro", 25, "juan", 23, true));


const usuarioFuncion = {
    "nombre": "pedro",
    "apellido": "castillo",
    "edad": 30,
    getNombreCompleto: function(){
        return nombre + " " + apellido;
    },
    getEdad: function() {
        return "Edad :" + edad;
    }
}
const {nombre, apellido, edad} = usuarioFuncion;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(usuarioFuncion.getNombrecompleto);
console.log(usuarioFuncion.getEdad);


