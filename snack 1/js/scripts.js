// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


let zucchineContenitore = [
    { tipo: 1, pesoGr: 50, lunghezzaCm: 10},
    { tipo: 2, pesoGr: 50, lunghezzaCm: 12},
    { tipo: 3, pesoGr: 50, lunghezzaCm: 14},
    { tipo: 4, pesoGr: 50, lunghezzaCm: 15},
    { tipo: 5, pesoGr: 50, lunghezzaCm: 16},
    { tipo: 6, pesoGr: 50, lunghezzaCm: 17},
    { tipo: 7, pesoGr: 50, lunghezzaCm: 18},
    { tipo: 8, pesoGr: 50, lunghezzaCm: 19},
    { tipo: 9, pesoGr: 50, lunghezzaCm: 20},
    { tipo: 10, pesoGr: 50, lunghezzaCm: 21},

]
let totalePeso = 0;

for (let i= 0;  i< zucchineContenitore.length; i++){
    totalePeso += zucchineContenitore[i].pesoGr;
}

console.log("il peso totale è di :" + " " + totalePeso);
console.log("il peso totale è di :" + " " + typeof totalePeso + totalePeso); //verifica di totale peso con typeof (stringa o numero?)

