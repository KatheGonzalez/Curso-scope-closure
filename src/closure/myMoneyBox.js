
// ------------------------------- EJEMPLO ALCANCIA -----------------

// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;                                                              // LOGICA QUE NO FUNCIONA
//     console.log(`Kathe! Tienes $ ${saveCoins}`);
// }

// moneyBox(5000);
// moneyBox(400000); // la logica no esta recordan que tiene mi funcion cada vez que la llamo 



//----- HAGAMOLO CON CLOSURE

function moneyBox(){ 
    // variable para iniciarlizar nuestro valor en cero

    let saveCoins = 0;
    // hagamos una closure que a esa si le vamos a pasar las variables y que recuerde y retorne esa logica para implementar y probar  
    function countCoins (coins){
        saveCoins += coins;
        console.log(`Kathe! tienes $ ${saveCoins}`)
    }

    return countCoins; // aqui ya pasamos ese contexto 

}


const myMoneyBox = moneyBox(); // creamos una instancia de la funcion para poderla retornar 

myMoneyBox(5000);
myMoneyBox(15000); // aqui ya recuerda el contexto porque guarda el valor en el contecto de la variable que tiene adentro
myMoneyBox(1000);


const moneyBoxAna = moneyBox();

moneyBoxAna(10);
moneyBoxAna(20); // por el ambito lexico su me guarda las variables 
moneyBoxAna(10)

