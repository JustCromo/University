/*
Un array annidato, o nested, è un array che contiene al suo interno degli interi e/o altri array annidati.

Si scriva una funzione Javascript flattenNestedArray che dato un array annidato restituisca un array contenente tutti gli interi nell'ordine di occorrenza.

Nel caso base in cui l'array annidato non contiene interi, si restituisca l'array vuoto. L'implementazione deve essere effettuata tramite l'utilizzo di ricorsione.


Esempio:

let arr = [[1, 2, [3]], 4, [], [[5, 6], 7]];
flattenNestedArray(arr) => [1, 2, 3, 4, 5, 6, 7];
*/

function flattenNestedArray(arr){

    let a = [];

    for(let i of arr){
        if(Array.isArray(i)) a = a.concat(flattenNestedArray(i));
        else a.push(i);
    }

    return a;
}