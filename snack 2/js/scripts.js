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

    { tipo: 5, peso: 50, lunghezzaCm: 16 },
    { tipo: 6, peso: 50, lunghezzaCm: 17 },
    { tipo: 7, peso: 50, lunghezzaCm: 18 },
    { tipo: 8, peso: 50, lunghezzaCm: 19 },
]

let zuc_corte = []; 
let zuc_lunghe = [];
let zuc_corte_peso = 0;
let zuc_lunghe_peso = 0;

for (let i = 0; i < zucchineContenitore.length; i++) {
    //If it is less than 15 cm Push into the short zucchini array
    if (zucchineContenitore[i].lunghezzaCm < 15){
        zuc_corte.push(zucchineContenitore[i]);
        zuc_corte_peso += zucchineContenitore[i].pesoGr;
    } else {
        zuc_lunghe.push(zucchineContenitore[i]);
        zuc_lunghe_peso += zucchineContenitore[i].pesoGr;
    }
}

console.log("zucchine corte:" + " " + zuc_corte);
console.log("zucchine lunghe:" + " " + zuc_lunghe);


console.log("zucchine corte peso:" + " " + zuc_corte_peso);
console.log("zucchine lunghe peso:" + " " + zuc_lunghe_peso);


// for (let i = 0; i < zucchineContenitoreDue.length; i++) {
//     totalePesoDue += zucchineContenitoreDue[i].peso;
// }
// console.log(totalePesoDue);



// let zucchineContenitoreDue = [
//     { tipo: 5, peso: 50, lunghezzaCm: 16 },
//     { tipo: 6, peso: 50, lunghezzaCm: 17 },
//     { tipo: 7, peso: 50, lunghezzaCm: 18 },
//     { tipo: 8, peso: 50, lunghezzaCm: 19 },
//     { tipo: 9, peso: 50, lunghezzaCm: 20 },
//     { tipo: 10, peso: 50, lunghezzaCm: 21 },
// ]





