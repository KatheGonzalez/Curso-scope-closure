
// --------------------------------------- BLOCK SCOPE  ---------------------------------
// LET, VAR, CONST , las variables definidas dentro de un bloque solo pueden ser usadas dentro de ese bloque, tenemos que tener 
// cuidado al momento de reasignar variables de bloque , dejar de usar VAR   
// lo que este adentro de corchetes es un handlebar , {}

function fruits() {
    if (true){
        //aqui estamos creando el bloque, un elemento de logica 
        var fruit = 'Apple';  //Global Scope
        let fruit1 = 'Kiwi'; //block Scope   // que pasa si quiero acceder a ellas fuera del bloque dentro de la misma funcion  
        const fruit2 = 'Banana'; //block Scope

        console.log(fruit2); //aqui si tengo el resultado porque si esta en el bloque
    }

    console.log(fruit);   // esta es la unica que pude acceder 
    console.log(fruit1); // Aqui ya no funciona LET y CONST solo van a tener el alcance BLOCK SCOPE 
    
}

//debemos llamar la funcion para poder ver el resultado de los console log 
fruits()


nameOfDog("Elmo"); 
function nameOfDog(name) {
     console.log(name); }

     