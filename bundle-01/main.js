/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

/*
1- Vorrebbe ciclare con indice da 0 a 4 e mostrarli in console
2- Non sono presenti errori di sintassi
3- Si, la condizione per ciclare impedisce al ciclo di iniziare, al primo passo avrò indice 0 e non rispetta la condizione di essere maggiore di 5
*/
// console.log('ESERCIZIO 1 CORRETTO');
// VERSIONE CORRETTA
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(' ');




// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

/*
1- Vorrebbe prendere un input, e se questo è pari restituire il suo valore aumentato di 5, altrimenti restituire l input
2- Non sono presenti errori di sintassi
3- Si, la condizione nell if utilizza un operatore di assegnazione al posto di uno booleano di uguglianza
*/
// console.log('ESERCIZIO 2 CORRETTO');
// VERSIONE CORRETTA
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

const risultato = addIfEven(4);
console.log(risultato);
console.log(' ');





// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

/*
1- Si tratta di una funzione che mostra in console gli indici di un ciclo for che va da 0 a 4
2- Si, all'interno della condizioni del ciclo for dichiarazione indice, condizione e incremento indice vanno separate con ; e non con ,
3- Non sono presenti errori di logica
*/
// console.log('ESERCIZIO 3 CORRETTO');
// VERSIONE CORRETTA
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

loopToFive();
console.log(' ');




// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/*
1- Funzione al cui interno si ha un array di numeri, si vuole ciclare su di esso e pushare in un nuovo array solo gli elementi di quello vecchio che son pari, infine la funzione restituisce questo nuovo array
2- Due errori di sintassi: ; dopo i++ non serve  e neanche dopo chiusura della condizione dell if
3- Cinque errori logici:
    - numbers.length senza il meno uno altrimenti non prendo l ultimo elemento di numbers
    - dentro l'if devo prendere gli elementi di numbers e non l'array stesso, manca [i]
    - sempre dentro la condizione dell if non ci va = ma ===
    - il push va fatto di numbers[i] e non di i
    - il returno evenNumbers va fuori dal ciclo for altrimenti al primo passo si esce dalla funzione mentre invece deve essere l'ultimo elemento prima della chiusura della funzione
    - se voglio vedere il return della funzione devo salvarlo in una variabile e poi fare un console.log di quella variabile
*/
// console.log('ESERCIZIO 4 CORRETTO');
// VERSIONE CORRETTA
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
const result = displayEvenNumbers();
console.log(result);

