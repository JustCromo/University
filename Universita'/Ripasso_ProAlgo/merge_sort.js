function mergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

function merge(A, p, q, r) {
    
    let L = A.slice(p, q + 1);
    let R = A.slice(q + 1, r + 1);

    let i = 0;
    let j = 0;
    let k = p;

    while (i < L.length && j < R.length) {
        if (L[i] <= R[j]) {
            A[k++] = L[i++];
        } else {
            A[k++] = R[j++];
        }
    }

    while (i < L.length) {
        A[k++] = L[i++];
    }

    while (j < R.length) {
        A[k++] = R[j++];
    }
}

let A = [1,5,4,3,8,2];
mergeSort(A, 0, A.length-1);

console.log(A);

//costo O(n log n)

// Funzionamento:

/*
    Parto dall'array e inizio ad identificare il suo centro
    Una volta identicato chiamo la funzione MergeSort ricorsivamente sia a destra
    che sinistra mettendo come argomenti per la Sx --> Array, p e centro
    e per la Dx --> Array, centro + 1 e r

    A questo punto avro l'array ordinato a 2 a 2 da destra e sinistra e non mi rimane che
    fare il Merge

    Definsico una funzione Merge che prende tutte le variabili che ci aiuteranno, quali
    Array, p = punto di inizio, q = centro, r = punto finale
    Nel Merge inizio definendo 2 array Sx e Dx che posso popolare sapendo da che punto Sx e Dx iniziano e finiscono
    A questo faccio un for per la grandezza r dell'array e utilizzo i punti degli array Sx e Dx per 
    metterli a confronto tra di loro, sin ad ottenere un array così ordinato

*/