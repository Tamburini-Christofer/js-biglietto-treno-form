//Creiamo una funzione che calcola lo sconto 
function calcoloSconto (valueKm, valueAge) {

//Creiamo una variabile contentente il biglietto unitario
    const ticketCost = 0.21;

//Creiamo una variabile contenente il valore della funzione eta
    let option = parseInt(valueAge.value);

//Creiamo una variabile che calcoli il costo di un biglietto standard
    const sumEntire = (ticketCost * valueKm); 

//Creiamo una variabile che conterrà il prezzo finale
    let prezzoFinale = 0;
    let tipoBiglietto = "";

//Creiamo un ciclo if per calcolare quale scelta del burger menu
    if (option === 1) {
      prezzoFinale = sumEntire * 0.8;
      tipoBiglietto = "Minorenne";
    } else if (option === 2) {
       prezzoFinale = sumEntire;
       tipoBiglietto = "Standard";
    } else if (option === 3){
        prezzoFinale = sumEntire * 0.6;
        tipoBiglietto = "Over-65";
    }
    return {
        prezzo: prezzoFinale.toFixed(2),
        tipo: tipoBiglietto
    };

}

/******************************************************************************************** */

//Ora selezioniamo gli elementi di uotput
//Nome del passeggero
const inputPasseggero = document.getElementById("nomePasseggero");
//Km da percorrere
const inputKm = document.getElementById ("km");
//età passeggero
const inputEta = document.getElementById ("eta");

//Ora selezioniamo il form per richiamare l'evento
const bigliettoForm = document.querySelector ("#formBiglietto");
//Selezioniamo bottone 
const bottoneForm = document.getElementById("generaBiglietto");
//Selezioniamo bottone reset
const bottoneReset = document.getElementById("reset");
/************************************************************* */

//Nome Output biglietto 
//Nome biglietto
const outPasseggero = document.getElementById("nome_passeggero");
//Tipo biglietto
const outTipoBiglietto = document.getElementById("tipoBiglietto");
//Carrozza
const outCarrozza = document.getElementById("carrozza");
//Codice Cp
const CodCpBiglietto = document.getElementById("codiceCP");
//Costo finale biglietto stampato
const outCostoBiglietto = document.getElementById("costo_biglietto");

/*****************************************************************/
/*Submittamo*/
bigliettoForm.addEventListener("submit", (evento) => {
//Blocchiamo la trasmissione automatica 
        evento.preventDefault();
//Assegniamo una variabile alla funzione  
        let prezzoBiglietto = calcoloSconto(parseFloat(inputKm.value), inputEta);
        //Scriviamo gli output
        outPasseggero.innerHTML = inputPasseggero.value;
        outTipoBiglietto.innerHTML = prezzoBiglietto.tipo;
        outCarrozza.innerHTML = Math.floor(Math.random() * 8);
        CodCpBiglietto.innerHTML = Math.floor(Math.random() * 70000);
        outCostoBiglietto.innerHTML = prezzoBiglietto.prezzo + " Euro";
});
//Scriviamo Il Reset bottone
bottoneReset.addEventListener("click", () => {
        bigliettoForm.reset();
        outPasseggero.innerHTML = "";
        outTipoBiglietto.innerHTML = "";
        outCarrozza.innerHTML = "";
        CodCpBiglietto.innerHTML = "";
        outCostoBiglietto.innerHTML = "";
}); 


