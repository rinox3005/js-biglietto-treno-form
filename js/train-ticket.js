'use strict';

const user = document.getElementById('name');
const distance = document.getElementById('distance');
const age = document.getElementById('age');
const sendButton = document.getElementById('send');
const deleteButton = document.getElementById('delete');
const passengerOut = document.getElementById('passenger');
const discountOut = document.getElementById('discount');
const cpNumber = document.getElementById('cp');
const carNumber = document.getElementById('car');
const priceOut = document.getElementById('price');
const ticket = document.getElementById('ticket');

sendButton.addEventListener('click', function () {

    const userName = user.value;
    const travelDistance = Number(distance.value);
    const userAge = age.value;

    // -- definisco una variabile pricePerKm e le assegno il valore 0.21

    const pricePerKm = 0.21;

    // -- assegno un valore di scontistica alla variabile youngDiscount = 20

    const youngDiscount = 20;

    // -- assegno un valore di scontistica alla variabile oldDiscount = 40

    const oldDiscount = 40;

    // -- definisco una variabile ticketCost calcolando distance * 0.21



    console.log('Name: ', userName);
    console.log('Travel distance: ', travelDistance, 'km');
    console.log('Age Range: ', userAge);
    console.log('Current price per Km: ', pricePerKm);
    passengerOut.innerHTML = userName;

    // va applicato uno sconto del 20% per i minorenni

    if (userAge === 'under') {

        let ticketCost = (travelDistance * pricePerKm);

        // -- definisco una variabile discountedYoung per lo sconto minorenni

        const discountedYoung = (ticketCost * youngDiscount) / 100;

        // -- definisco una variabile ticketCostYoung calcolandone il valore

        ticketCost = (ticketCost - discountedYoung);

        // -- assegno alla variabile ticketCost il nuovo valore con lo sconto under 18 applicato

        ticketCost = ticketCost.toFixed(2);

        // -- mostro in console il valore con lo sconto under 18 applicato

        console.log('Ticket price: ', ticketCost, '€', '- under 18 discount applied');

        discountOut.innerHTML = ('Discount Under 18')

        priceOut.innerHTML = ticketCost + ' €';

        // va applicato uno sconto del 40% per gli over 65

    } else if (userAge === 'over') {

        let ticketCost = (travelDistance * pricePerKm);

        // -- definisco una variabile discountedYoung per lo sconto minorenni

        const discountedOld = (ticketCost * oldDiscount) / 100;

        // -- definisco una variabile ticketCostOld calcolandone il valore

        ticketCost = (ticketCost - discountedOld);

        // -- assegno alla variabile ticketCost il nuovo valore con lo sconto under 18 applicato

        ticketCost = ticketCost.toFixed(2);

        // -- mostro in console il valore con lo sconto over 65 applicato

        console.log('Ticket price: ', ticketCost, '€', '- over 65 discount applied');

        discountOut.innerHTML = ('Discount Over 65')

        priceOut.innerHTML = ticketCost + ' €';


    } else {

        let ticketCost = (travelDistance * pricePerKm);

        // -- se nessuna delle condizioni precedenti si é verificata calcolo il semplice costo del biglietto senza sconti

        ticketCost = ticketCost.toFixed(2);

        // -- mostro nel documento il costo del biglietto senza nessuno sconto applicato

        console.log('Ticket price: ', ticketCost);

        discountOut.innerHTML = ('Standard Price')

        priceOut.innerHTML = ticketCost + ' €';
    }

    //generatore numero pratica

    cpNumber.innerHTML = Math.floor((Math.random() * 100000) + 1);

    //generatore numero carrozza

    carNumber.innerHTML = Math.floor((Math.random() * 30) + 1);

    // mostro il ticket in pagina solo quando si inviano i dati

    ticket.classList.remove('d-none');
})


deleteButton.addEventListener('click', function () {
    distance.value = ('');
    age.value = ('null');
    user.value = ('');
})




