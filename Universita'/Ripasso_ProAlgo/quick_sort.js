function quickSort(A, p, r){

    if(p < r){
        let q = partiziona(A, p, q, r);
        quickSort(A, p, q-1);
        quickSort(A, q+1, r);
    }

}

function partiziona(A, p, q, r){

    let x = A[r];
    let i = p - 1;

    for(let j = p; j < r-1; j++){
        
        if(A[j] <= x){
            i++;
            [A[i], A[j]] = [A[j], A[i]];
        }

    }

    [A[i+1], A[r]] = [A[r], A[i+1]];

    return i+1;

}


//cost O(n log n)

/* Funzionamento:

    sceglo un valore all'interno dell'array ed esso diventerà il mio pivot
    una volta scelto riorganizzio l'array in modo tale che tutti i valori
    <= al pivot stiano sulla sinistra del pivot
    >= al pivot stiamo sulla destra del pivot

    una votla fatta questa operazione applico la funzione di partizione

*/