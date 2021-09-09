// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

// esercizio snack 5

// se l'array iniizale è ad esempio:
// var array = [0, 1, 2, 3, 4, 5, 6];
// Creo una funzione con un minimo e massimo ad esempio min: 1 max 3 che mi darà come risultato:
// var array2 = [1, 2, 3];

// Scrivi una funzione che accetti tre argomenti
// un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
let array_primario = ["a", "b", "c", "d", "e"];

let possibileSoluzione = soluzione(array_primario, 2, 4);
console.log(possibileSoluzione);

// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”
function soluzione(array_primario, num1, num2) {
    let array_secondario = [];
    for (let i = 0; i < array_primario.length; i++) {
        //console.log()array_primario[i];
        if (i >= num1  && i <= num2) {
            array_secondario.push(array_primario[i]);
        }
    
    }
    return array_secondario;
}   
