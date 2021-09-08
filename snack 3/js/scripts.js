// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata(es.Ciao -> oaiC)

function paroleInversa(parola){
    let Inversa= "";

    for( var i = parola.length -1; i >= 0; i--){
        Inversa += parola[i];
    }
    return Inversa
}

paroleInversa(parolaInversa);
console.log(parolaInversa);
  

let word = prompt("inserisci una parola");
console.log(word);
