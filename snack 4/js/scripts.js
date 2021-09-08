// Scrivi una funzione che fonda due array(aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

// snack 4



function mergeArray(arrUno, arrDue) {
    let arrTre = [];
    for (let i = 0; i < arrUno.length; i++) {
        arrTre.push(arrUno[i]);
        arrTre.push(arrDue[i]);
    }

    return tre;

}   


let arrUno = ["a", "b", "c"];

let arrDue = [1, 2, 3];

console.log(mergeArray(arrUno, arrDue));