
// ---------------------------------------- FUNCTION SCOPE -------------------------------- 


//acceder a una variable definida dentro de una funcion  
// las variables que esten definidas dentro de las funciones solo se podran acceder dentro de ellas 
// solamente se acceden a ellas dentro de ese bloque 

function greeting() {
    //cada funcion que hagamos va a tener su propio alcance 
    let useName = 'Ana'
    console.log(useName);

    if(useName === 'Ana'){
        console.log(`Hello ${useName}`)  // aqui ya la estamos usando y si puede ser usada dentro de la funcioón ahi no hay lio
    }
}

greeting(); 
// console.log(`Hola ${useName}`)  // aqui nos sale error, porque no ha sido defini


const fruits = () => { 
    if (true) { 
        var fruit1 = 'apple'; 
        const fruit2 = 'banana'; 
        let fruit3 = 'kiwi'; } 

    return fruit1;
    }


fruits();