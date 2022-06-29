
// ---------------- AMBITO LEXICO --------------------------------- 
//es la accesibilidad de las variables anidadas en funciones 
//una funcion dentro de una funcion ya es un closure
// COMO PUEDO ACCEDER A ESTAS VARIABLES DESDE LAS VARIABLES ANIDADAS 
// podemos tener acceso a ellas de acuerdo a donde esten anidadas y declaradas.     

const myGlobal = 0; 

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal); // aqui esta la variable global que estoy llamando , no hay problema

    function funcionInterna() { // aqui ya estamos creando un closure --- Funcion Interna 
        const inner = 2;
        console.log(myNumber, myGlobal); // my number esta declarda dentro del scope al qe puede acceder

        function funcionHija() {
            console.log(inner, myNumber, myGlobal); 
        }

        return funcionHija();  // debo retornar dentro de la funcion la funcion interna
    }

    return funcionInterna(); // debo retornar dentro de la funcion la funcion interna

}

myFunction();

