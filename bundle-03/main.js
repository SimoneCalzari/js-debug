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


// // ESERCIZIO 1 (suggerimento: ci sono 6 errori)
// const cars = [
//     {
//         manufacturer: 'Ford',
//         model: 'Fiesta',
//         type: 'diesel'
//     },
//     {
//         manufacturer: 'Audi',
//         model: 'A1',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Golf',
//         type: 'Benzina'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Panda',
//         type: 'metano'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Multipla',
//         type: 'GPL'
//     },
//     {
//         manufacturer: 'Tesla',
//         model: 'Model 3',
//         type: 'elettrico'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Polo',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Ford',
//         model: 'Kuga',
//         type: 'Diesel'
//     },
//     {
//         manufacturer: 'Seat',
//         model: 'Ibiza',
//         type: 'metano'
//     }
//     {
//         manufacturer: 'Audi',
//         model: 'R8',
//         type: 'Benzina'
//     },
// ];

// const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

// const dieselCars = cars.filter( (auto) => {
//     auto.type === 'diesel';
// });

// const otherCars = cars.filter( (auto) => {
//     return auto.type !== 'benzina' || auto.type !== 'diesel';
// });

// console.log('Auto a benzina');
// console.log('*******************************');
// console.log(gasolineCars);

// console.log('Auto a diesel');
// console.log('*******************************');
// console.log(dieselCars);

// console.log('Tutte le altre auto');
// console.log(otherCars);

/*

1- Dato un array di oggetti macchine vogliamo creare tre nuovi array in base al tipo di combustile usato e poi andare a stampare questi tre array in console
2- Si, dopo il penultimo elemento dell'array manca la virgola, poi nel primo filter abbiamo >= come se fosse un operatore booleano al posto della freccia per avere una arrow function
3- In tutti gli auto.type dentro le funzioni di filter è necessario riportare il dato al lowerCase per tutelarsi da errori di case sensitive dei dati sulle macchine forniti
Nell'ultima filter l operatore or || deve essere sostituito dall and && perchè vogliamo che siano necessarie entrambe le condizioni e non solo una
Nella seconda filter dal momento che nella arrow function non siamo su una riga sola e abbiamo le parentesi graffe il return non sarà implicito, quindi va esplicitato

*/

//ESERCIZIO CORRETTO

const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel';
});

console.log('Le auto totali sono:');
console.log(cars.length);
console.log('');
console.log('Auto a benzina');
console.log(gasolineCars);
console.log('');
console.log('Auto a diesel');
console.log(dieselCars);
console.log('');
console.log('Tutte le altre auto');
console.log(otherCars);