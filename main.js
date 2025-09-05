// Comunicare al cliente il valore euro/km
const ticketCost = 0.21;

console.log(`il costo del biglietto è di ${ticketCost} €/km`);

//Il programma chiede all'utente il numero di km e l'età
const km = prompt("Quanti km vuoi percorrere?");
const age = prompt("Quanti anni hai?");

console.log(`Hai confermato di voler percorrere ${km}km e di avere ${age} anni`);

//Calcolo lo sconto del 20% sui minorenni 

const discountChild = 20;
const discountOld = 40;

    if(age<=17) {
        console.log("In quanto minorenne hai accesso allo sconto Minorenni!!!")

    } else if (age>=65) {
        console.log("In quanto Over 60 hai accesso allo sconto Over 65!!!"
        )
    }

// Calcolo sconto
const sumDiscChild= (ticketCost * km) / 100 * discountChild;
const sumDiscOld= (ticketCost * km) / 100 * discountOld ;

if (age <= 17) {
    console.log(`Lo sconto è di: ${sumDiscChild.toFixed(2)} €`);
}  else if (age >= 65) {
    console.log(`Lo sconto è di: ${sumDiscOld.toFixed(2)} €`);
}

// Calcolo totale da pgare
const sumEntire= (ticketCost * km); 
const sumChild = (ticketCost * km) - sumDiscChild;
const sumOld = (ticketCost * km) - sumDiscOld;


if (age <= 17) {
    console.log(`Il totale da pagare è di ${sumChild.toFixed(2)} €`);
} else if ((age >= 18) && (age <64)) {
    console.log(`Il totale da pagare è di ${sumEntire.toFixed(2)} €`);
}  else {
    console.log(`Il totale da pagare è di ${sumOld.toFixed(2)} €`);
}

