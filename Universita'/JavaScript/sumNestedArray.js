function sumNestedArray (a) {

    if (a.length == 0) {
        return 0
    }
    let sum = 0
    for (let n of a) {
        if (typeof(n) === 'number') sum += n;
        else sum += sumNestedArray(n);
    }

    return sum;

}


/*
Un array annidato, o nested, è un array che contiene al suo interno degli interi e/o altri array annidati.

Si scriva una funzione Javascript sumNestedArray che dato un array annidato restituisca la somma di tutti gli elementi.

Nel caso base in cui l'array annidato non contiene interi, si restituisca zero. L'implementazione deve essere effettuata tramite l'utilizzo di ricorsione.



Esempio:

let arr = [[1, 2, [3]], 4, [], [[5, 6], 7]];
sumNestedArray(arr) => 28;

*/