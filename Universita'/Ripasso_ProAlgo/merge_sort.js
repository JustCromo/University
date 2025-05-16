function mergeSort(A, p, r){

    if (p < r){

        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }

}

function merge(A, p, q, r){

    let L = [];
    let R = [];

    for(let i = 0; i < r; i++){

        if(A[i] <= q) L.push(A[i]);
        else R.push(A[i]);

    }

    let i = 0;
    let j = 0;

    for(let k = 0; k < r; k++){
        
        if(L[i] <= R[i]){
            A[k] = L[i];
            i = i+1;
        }else{
            A[k] = R[j];
            j = j+1;
        }

    }

}

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