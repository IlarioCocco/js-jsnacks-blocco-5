// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


// esercizio snack 2

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


let zucchineContenitore = [
    { tipo: 1, pesoGr: 50, lunghezzaCm: 10 },
    { tipo: 2, pesoGr: 50, lunghezzaCm: 12 },
    { tipo: 3, pesoGr: 50, lunghezzaCm: 14 },
    { tipo: 4, pesoGr: 50, lunghezzaCm: 15 },
]

let zucchineContenitoreDue = [
    { tipo: 5, peso: 50, lunghezzaCm: 16 },
    { tipo: 6, peso: 50, lunghezzaCm: 17 },
    { tipo: 7, peso: 50, lunghezzaCm: 18 },
    { tipo: 8, peso: 50, lunghezzaCm: 19 },
    { tipo: 9, peso: 50, lunghezzaCm: 20 },
    { tipo: 10, peso: 50, lunghezzaCm: 21 },
] 


for (let i = 0; i < zucchineContenitore.length; i++) {
    if (zucchineContenitore[i].lunghezzaCm < 15){
        zucchineContenitoreDue.push(zucchineContenitore[i]);
    } else {
        zucchineContenitore.push(zucchineContenitore[i]);
    }
}

console.log(zucchineContenitore);
console.log(zucchineContenitoreDue);





// let zucchineContenitoreDue = [
//     { tipo: 5, peso: 50, lunghezzaCm: 16 },
//     { tipo: 6, peso: 50, lunghezzaCm: 17 },
//     { tipo: 7, peso: 50, lunghezzaCm: 18 },
//     { tipo: 8, peso: 50, lunghezzaCm: 19 },
//     { tipo: 9, peso: 50, lunghezzaCm: 20 },
//     { tipo: 10, peso: 50, lunghezzaCm: 21 },
// ]
// let totalePesoDue = 0;

// for (let i = 0; i < zucchineContenitoreDue.length; i++) {
//     totalePesoDue += zucchineContenitoreDue[i].peso;
// }
// console.log(totalePesoDue);


