
// ------------------------- REASIGNACION Y REDECLARACION -----------------------

// ------------------------- PRIMERO CON VAR ------------------------------------

var firstName; // aqui declaramos y tenemos un undefined, no tenemos nadsa asignado  

firstName = 'Oscar'; 
console.log(firstName) // Hasta aqui esta perfecto

// Si queremos reasignar un valor  

var lastName = 'David' // declarando y asignando de una vez 
lastName = 'Ana'       // aqui se volvio a reasignar
console.log(lastName)  

var secondName =  'David'; // declarando y asignando
var secondName = 'Ana';  // declarando y asignando
console.log(secondName) // aqui se queda el ultimo, la reasignacion

// ------------------------- AHORA CON LET  -----------------------------------

let fruit = 'Apple'; // declarar y asignar  
fruit = 'Kiwi'; // con let puedo reasignar el valor  
console.log(fruit)
// let fruit = 'Banana' // NO PUEDO REDECLARAR NOS SALE ERROR, ya existe no se puede redeclarar 
// console.log(fruit) 

// ------------------------- AHORA CON CONST ----------------------------------

const animal = 'Dog'; // declarar y asignar 
// animal = 'gatito' // reasignar 
console.log(animal)
// animal='snake';
// console.log(animal)  // no lo puedo volver a usar, no es una forma infalible de manejar la inmutabilidad 


// ------------------------- MANEJOR CON ARRAYS Y DEMAS ELEMENTOS CON REFERENCIA EN MEMORIA --------------

const vehicles = []; 
vehicles.push('car');
console.log(vehicles) // aqui apunta a la referencia

// aqui no estamos declarando ni reasignando, sobre el array puedo usar metodos, con respecto a la referencia, eso es lo que modifica 
//no lo esta declarando otra vez, permite modificar con arrays o objetos  

vehicles.pop(); // despues usamos el metodo pop para eliminar  
console.log(vehicles)

