/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

/*
1- Si tratta di una funzione che vorrebbe prendere in input l'eta e stampare in console un messaggio a seconda che tu sia maggiorenne o minorenne
2- Non ci sono
3- La variabile messagge è assegnata come costante ma poi viene modificato il suo valore, ergo dovrà essere una let
   Se voglio mostrare un messaggio dovrò mettere il console log di messagge
   Potrei mettere myAge come input della funzione e non inserirlo dentro
   Nel caso di maggiorenne ha piu senso dire sei maggiorenne che mettere hai piu di 18 anni, che nel caso di età 18 sarebbe un pò strano
*/

// VERSIONE CORRETTA
// function checkAge(myAge) {
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Sei maggiorenne';
//     }
//     console.log(message);
// }
// checkAge(18);






// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

/*
1- Si tratta di una funzione che restituisce il numero di elementi di un array, che è stato definito dentro la funzione e non dato in input
2- La parola lunghezza è scritta male
3- Errori no, potrebbe aver senso rendere l'array un dato di input e non direttamente definito dentro la funzione
*/

// VERSIONE CORRETTA
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();






// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

/*
1- Si tratta di una funzione al cui interno si passa tramite prompt un numero e poi lo si somma a 12, poi si stampa in console il risultato
2- No
3- Il dato inserito nel prompt è una stringa, quindi bisogna convertirlo in number
   Non ci sono controlli sul fatto che l utente effettivamente inserisca numeri invece di lettere, caratteri speciali, spazi o altro
   Se l utente non inserisci niente , il prompt prende 0 numero di default 
*/

// VERSIONE CORRETTA
// function addNumbers() {
//     const userNumber = +prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();






// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

/*
1- Si tratta di una funzione che dato un array di mail e un input dell user, controlla se la sua email è presente e a seconda dell'esito del controllo stampa accesso consetito o negato
2- No
3- La variabile grantAccess che cambia a seconda dell'esito del controllo è una stringa, mentre il confronto per decidere cosa stampare in console confronta con true booleano. Con questa soluzione avremo sempre accesso negato anche avendo inserito la mail corretta. 
SOLUZIONE- Modifichiamo grantAccess rendedola true e false booleani oppure faccio il confronto successivo con true stringa, penso la prima soluzione sia migliore
        - Potrei anche nell'ultimo if mettere == che controlla solo il contenuto e non il tipo, ma non mi sembra una bella soluzione
*/

// VERSIONE CORRETTA
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();






// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();


/*
1- Simile alla funzione dell'esercizio sopra con un controllo sulla lunghezza minima della mail inserita dall'utente
2- Si manca la parentesi graffa di chiusura della function, inoltre il richiamo della funzione va fatto fuori dalla funzione stesso
3- 
*/

// VERSIONE CORRETTA
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
checkAccessImproved();































