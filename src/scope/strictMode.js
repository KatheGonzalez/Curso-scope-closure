
// ----------------------STRICT MODE -----------------------------

// Modo estricto, nos permite ejecutar de forma estricta una reglas para manejar ciertas reglas

//Ejemplos: 
// voy a pasar a una variable sin declarar

// var pi; // esto es lo que interpreta javascript 

'use strict'; // poniendo esta declaracion al inciion de nuestro codigo entonces no nos muestra nadita que no este declarado
pi = 3.1416;  // solo hemos pasado el numero , lo hemos asignado mas no definido
console.log(pi)

function myFunction () {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction())  // aqui nos sale error!  