// Scrivi una funzione che fonda due array(aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

// snack 4



function unisci(arrUno, arrDue) {
    let arrFusione = [];
    for (let i = 0; i < arrUno.length; i++) {
        arrFusione.push(arrUno[i]);
        arrFusione.push(arrDue[i]);
    }

    return arrFusione;

}   


let arrUno = ["a", "b", "c"];

let arrDue = [1, 2, 3];

console.log(unisci(arrUno, arrDue));
alert(unisci(arrUno, arrDue));