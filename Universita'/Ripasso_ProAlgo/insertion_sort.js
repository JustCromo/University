function insertionSort(A,n){

    for(let j = 0; j < n; j++){

        let key = A[j];

        let i = j - 1;

        while(i > -1 && A[i] > key){

            A[i + 1] = A[i];
            i = i - 1;

        }

        A[i + 1] = key;

    }

}

//costo O(n)

/* Funzionamento:

    Prendo il primo elemento dell'array e lo inserisco
    Prendo il valore successivo e partendo dalla coda dell'array controllo se e' > rispetto al valore dalla
    coda che sto analizzando, se si lo inserisco prima, se no passo a quello dopo sempre dalla coda e 
    controllo di nuovo e cosi' via
    Al termine dell'esecuzione otterro' cosi' un array ordinato.

 */