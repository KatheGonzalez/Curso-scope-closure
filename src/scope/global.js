var a ; // declarando
var b = 'b' ; // declaramos / asignamos 
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


// GLOBAL SCOPE 
// Todo lo que este dentro del elemento  

var fruit = 'Apple'; // Global  
console.log(fruit)

function bestFruit () {
    console.log(fruit)  // Va a asignar en memoria 
}; 

bestFruit();  // aqui se ejecuta Apple 


//Cuando no declaramos variables sino que solo las definimos se ponen automaticamente como variables globales
// declarar es ponerle como VAR, LET o CONST  

function countries() {
    country = 'Colombia'; // quedo como variable global porque solo la asignamos no la declaramos, no le pongo var, let o const 
    console.log(country)
}

countries(); 
console.log(country)

