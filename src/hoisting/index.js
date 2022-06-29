
// -------------------------- HOISTING ----------------------

// Como estas variables se elevan y saber si tenemos un error o no 

var nameOfDog; // esto es lo que esta haciendo mi hoisting, me declara la variable automaticamente sin ningun valor dentro 

console.log(nameOfDog) // undefined, porque cuando la asignacion se hace despues del llamado
var nameOfDog = 'Elmo';  // aqui se inciializa nameofDog 
console.log(nameOfDog);

// ------------------- HOISTING EN UNA FUNCION --------------------

// var name; // esto es lo que ha hecho hoisting  - undefined 
var name = 'Elmito';
nameOfCat();

function nameOfCat(){
    console.log(`El mejor gatito del mundo es: ${name}`);
}



