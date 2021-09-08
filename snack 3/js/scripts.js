// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata(es.Ciao -> oaiC)

function parolaInversa(parola){
    let Inversa= "";

    for( var i = parola.length -1; i >= 0; i--){
        Inversa += parola[i];
    }
    return Inversa
}

let Inversa = parolaInversa(prompt("inserisci una parola"));
console.log(Inversa);
  

