// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


// esercizio snack 2

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine_contenitore = [
    { tipo: 1, pesoGr: 50, lunghezzaCm: 10 },
    { tipo: 2, pesoGr: 50, lunghezzaCm: 12 },
    { tipo: 3, pesoGr: 50, lunghezzaCm: 14 },
    { tipo: 4, pesoGr: 50, lunghezzaCm: 15 },
    { tipo: 5, pesoGr: 50, lunghezzaCm: 16 },
    { tipo: 6, pesoGr: 50, lunghezzaCm: 17 },
    { tipo: 7, pesoGr: 50, lunghezzaCm: 18 },
    { tipo: 8, pesoGr: 50, lunghezzaCm: 19 },
];

//ho creato 2 contenitori
let zuc_corte = []; 
let zuc_lunghe = [];

let zuc_corte_peso = 0;
let zuc_lunghe_peso = 0;


for (let i = 0; i < zucchine_contenitore.length; i++) {

        //If it is less than 15 cm Push into the short zucchine array
    if (zucchine_contenitore[i].lunghezzaCm < 15){
        zuc_corte.push(zucchine_contenitore[i]);
        zuc_corte_peso += zucchine_contenitore[i].pesoGr;

        //if else into long zucchine
    } else {
        zuc_lunghe.push(zucchine_contenitore[i]);
        zuc_lunghe_peso += zucchine_contenitore[i].pesoGr;
    }
}

//stampo in console.log separatamente le zucchine che misurano meno di 15 cm
console.log("zucchine corte:" + " " + zuc_corte);
console.log("zucchine lunghe:" + " " + zuc_lunghe);

console.log("zucchine corte peso:" + " " + zuc_corte_peso);
console.log("zucchine lunghe peso:" + " " + zuc_lunghe_peso);






