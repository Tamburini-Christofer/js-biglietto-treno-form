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

//Creiamo un ciclo if per calcolare quale scelta del burger menu
    if (option === 1) {
        prezzoFinale = sumEntire * 0.8;
    } else if (option === 2) {
       prezzoFinale = sumEntire;
    } else if (option === 3){
        prezzoFinale = sumEntire * 0.6;
    }
    return prezzoFinale.toFixed(2);
}

//Ora selezioniamo gli elementi di uotput
//Nome del passeggero
const nomePasseggero = document.getElementById("nomePasseggero");
//Km da percorrere
const kmPercorso = document.getElementById ("km");
//età passeggero
const etaPasseggero = document.getElementById ("eta");

//Ora selezioniamo il form per richiamare l'evento
const bigliettoForm = document.querySelector ("#formBiglietto");

//Selezioniamo bottone 
const bottoneForm = document.getElementById("generaBiglietto");
//Selezioniamo bottone reset
const cottoneReset = document.getElementById("reset");

/************************************************************* */
//Nome Output biglietto 
//Nome biglietto
const nomeBiglietto = document.getElementById("nomeBiglietto");
//Tipo biglietto
const tipoBiglietto = document.getElementById("tipoBiglietto");
//Carrozza
const carrozza = document.getElementById("carozza");
//Codice Cp
const CodCpBiglietto = document.getElementById("codiceCP");
//Costo finale biglietto stampato
const costoBiglietto = document.getElementById("costo_biglietto");

/*****************************************************************/
/*Submittamo*/
bigliettoForm.addEventListener("submit", (evento) => {
        evento.preventDefault();
        
        let prezzoFinale = calcoloSconto(parseFloat(kmPercorso.value), etaPasseggero.value);
        nomePasseggero.innerHTML = nomeBiglietto.value;
        costoBiglietto.innerHTML = prezzoFinale + " €";
});


// // Comunicare al cliente il valore euro/km
// console.log(`il costo del biglietto è di ${ticketCost} €/km`);

// // //Il programma chiede all'utente il numero di km e l'età
// // const km = prompt("Quanti km vuoi percorrere?");
// // const age = prompt("Quanti anni hai?");
// // console.log(`Hai confermato di voler percorrere ${km}km e di avere ${age} anni`);

// // //Calcolo lo sconto del 20% sui minorenni 
//     if(age<=17) {
//         console.log("In quanto minorenne hai accesso allo sconto Minorenni!!!")

//     } else if (age>=65) {
//         console.log("In quanto Over 60 hai accesso allo sconto Over 65!!!"
//         )
//     }

// // // Calcolo sconto
// // const sumDiscChild= (ticketCost * km) / 100 * discountChild;
// // const sumDiscOld= (ticketCost * km) / 100 * discountOld ;
// // if (age <= 17) {
// //     console.log(`Lo sconto è di: ${sumDiscChild.toFixed(2)} €`);
// // }  else if (age >= 65) {
// //     console.log(`Lo sconto è di: ${sumDiscOld.toFixed(2)} €`);
// // }

// // Calcolo totale da pgare
// // const sumEntire= (ticketCost * km); 
// // const sumChild = (ticketCost * km) - sumDiscChild;
// // const sumOld = (ticketCost * km) - sumDiscOld;
// // if (age <= 17) {
// //     console.log(`Il totale da pagare è di ${sumChild.toFixed(2)} €`);
// // } else if ((age >= 18) && (age <64)) {
// //     console.log(`Il totale da pagare è di ${sumEntire.toFixed(2)} €`);
// // }  else {
// //     console.log(`Il totale da pagare è di ${sumOld.toFixed(2)} €`);
// // }
