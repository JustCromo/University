
function countingSort(A, B, k){

    let C = [];

    for(let i = 0; i <= k; i++) C[i] = 0;

    for(let j=0; j < C.length; j++) C[A[j]] += 1;

    let j = 0;

    for(let z = 0; z <= k; z++){
        for(let v = 0; v < C[z]; v++){
            B[j] = z;
            j++;
        }
    }
}

//complessità O(k + n);

/* Funzionamento:

    Parto da un Array A, un Array vuoto B (che sarà quello che produrrà l'array ordinato) e k ( = un valore numerico in range di A)

    Creo un array d'appoggio C e lo popoplo con 0 pari a lunghezza k-1;
    In seguito scorro C e mi segno quanto volte corrisponde il valore che ho in A dentro C (facendo un seplice incremento, es.
    quante volte il valore 5 è presente nella posizione 5)

    Ora inizializzo una variabile di counting per B e inizio a scorrere C, per ogni elemento inserisco il valore di C che sto passando 
    dentro B (es. se prima avevo che nella posizione 5 ci sono i 5 e ho come valore 3, so che ci sono 5 3, quindi ad un certo punto
    del mio array ordinato avrò un [..., 5, 5, 5,...])

    Alla fine della compilazione otterrò in B il mio array ordinato di lunghezza A

*/