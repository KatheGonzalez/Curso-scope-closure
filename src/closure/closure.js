
// ---------------------- EJERCICIO DE ALCANCIA -------------------------

// las closure proporcionan acceso al ambito lexico, a nivel de los niveles que tenemos  


function greeting(){
    let userName = 'Oscar'; 

    function displayUserName () {
        return `Hi! ${userName}`;
    }

    return displayUserName();
}

const g = greeting();

console.log(g); // aqui estamos retornado la definicion que tiene el displayUserName y nos entrega el valor
//recuerda el contexto 

console.log(g());
