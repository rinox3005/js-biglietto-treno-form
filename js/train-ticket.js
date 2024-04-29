'use strict';

const distance = document.getElementById('distance');
const age = document.getElementById('age');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', function () {

    const travelDistance = Number(distance.value);
    const userAge = Number(age.value);

    // -- definisco una variabile pricePerKm e le assegno il valore 0.21

    const pricePerKm = 0.21;

    // -- assegno un valore di scontistica alla variabile youngDiscount = 20

    const youngDiscount = 20;

    // -- assegno un valore di scontistica alla variabile oldDiscount = 40

    const oldDiscount = 40;

    // -- definisco una variabile ticketCost calcolando distance * 0.21

    let ticketCost = (travelDistance * pricePerKm);

    // va applicato uno sconto del 20% per i minorenni

    if (userAge < 18) {
        // -- definisco una variabile discountedYoung per lo sconto minorenni

        const discountedYoung = (ticketCost * youngDiscount) / 100;

        // -- definisco una variabile ticketCostYoung calcolandone il valore

        const ticketCostYoung = (ticketCost - discountedYoung);

        // -- assegno alla variabile ticketCost il nuovo valore con lo sconto under 18 applicato

        ticketCost = Math.round(ticketCostYoung * 100) / 100;

        // va applicato uno sconto del 40% per gli over 65

    } else if (userAge > 65) {

        // -- definisco una variabile discountedYoung per lo sconto minorenni

        const discountedOld = (ticketCost * oldDiscount) / 100;

        // -- definisco una variabile ticketCostOld calcolandone il valore

        const ticketCostOld = (ticketCost - discountedOld);

        // -- assegno alla variabile ticketCost il nuovo valore con lo sconto under 18 applicato

        ticketCost = Math.round(ticketCostOld * 100) / 100;


    } else {

        // -- se nessuna delle condizioni precedenti si é verificata calcolo il semplice costo del biglietto senza sconti

        ticketCost = Math.round(ticketCost * 100) / 100;

    }

    console.log('Travel distance: ', travelDistance, 'km');
    console.log('Age: ', userAge, 'years old');
    console.log('Current price per Km: ', pricePerKm);
    console.log('Ticket price: ', ticketCost);
})

