Descrizione:

Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

//********* MILESTONE 1: *********//

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero

-- Creo 1 input che chieda all'utente il numero di km che vuole percorrere //distance

-- Creo 1 input che chieda all'utente l'etá //age

-- Creo un bottone #send che al click vada ad assegnare alle variabili distance ed age i valori rispettivi immessi dall'utente

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

-- definisco una variabile ticketCost calcolando distance * 0.21

SE (age < 18) {

va applicato uno sconto del 20% per i minorenni

-- assegno un valore di scontistica alla variabile youngDiscount = 20

-- definisco una variabile discountedYoung per lo sconto minorenni ((ticketCost * youngDiscount) / 100)

-- definisco una variabile ticketCostYoung calcolando il valore come (ticketCost - discountedYoung)

ticketCost = ticketCostYoung

} ELSE (age > 65){

va applicato uno sconto del 40% per gli over 65

-- assegno un valore di scontistica alla variabile oldDiscount = 40

-- definisco una variabile discountedOld per lo sconto minorenni ((ticketCost * oldDiscount) / 100)

-- definisco una variabile ticketCostOld calcolando il valore come (ticketCost - discountedOld)

ticketCost = ticketCostOld

-- Mostro in console il risultato

}

//********* MILESTONE 2: *********//

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

-- Creo un input che chieda all'utente il suo nome e assegno quel valore ad una variabile name

-- Utilizzo lo stesso input dei km da percorrere creato in precedenza e assegnato alla variabile distance

-- Creo un input dropdown dove inserire i 3 casi di etá e modifico le condizioni create in precedenza

-- Creo un bottone #delete che al click vada a svuotare i campi di input e resettare il dropdown

-- Creo un random number generator 1-30 che generi randomicamente un numero di carrozza e lo assegni come valore alla variabile //car

-- Creo un random number generator 1-100000 che generi randomicamente un CP e lo assegni come valore alla variabile //cp

-- Aggiorno il funzionamento del bottone di invio dei dati creato in precedenza ed assegno il valore alle nuove variabili che mi servirá per l'output 

-- Faccio in modo che al click del bottone #send venga visualizzato nel documento il biglietto generato con i valori immessi, randomizzati e calcolati

-- Realizzo un fac-simile di biglietto con i campi vuoti, non visualizzato in pagina (d-none) che verrá riempito e mostrato nel documento al click del bottone #send

-- Mostro il prezzo finale formattato con massimo 2 decimali (toFixed(2))


//********* BONUS: *********//

--- Creazione veste grafica piú gradevole (easy) e responsiva (??) ---
