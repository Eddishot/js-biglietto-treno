
console.log("check");

const distanzaKm = parseInt (prompt("Quanti chilometri vuole percorrere?"));

if (isNaN(distanzaKm)){

    alert("Errore.Immettere solo cifre numeriche");

} else{
    console.log("valido");
}


const etaPasseggero = parseInt (prompt("Quanti anni ha?"));

if (isNaN(etaPasseggero)){

    alert("Errore.Immettere solo cifre numeriche");

} else{
    console.log("valido");
}



const euroKm = (0.21).toFixed(2);

let prezzoBiglietto = distanzaKm * euroKm;

const prezzoBigliettoUnder18= (distanzaKm * euroKm) * 0.2;
const prezzoBigliettoOver65= (distanzaKm * euroKm) * 0.4;



if (etaPasseggero < 18){

    alert("Complimenti! Hai diritto ad  uno sconto del 20%. Il prezzo finale da pagare è" + prezzoBigliettoUnder18.toFixed(2) + "$" );

} else if (etaPasseggero > 65){

    alert("Complimenti! Hai diritto ad uno sconto del 40% .Il prezzo finale da pagare è" + prezzoBigliettoOver65.toFixed(2) + "$");
} else{
    alert( "Complimeti, il totale del suo biglietto è di" + prezzoBiglietto.toFixed(2) + "$")
}









