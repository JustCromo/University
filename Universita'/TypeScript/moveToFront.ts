function moveToFront1<T>(a:T[],k:T, f: (m:T,n:T) => boolean):number{
    
    for (let p:number = 0; p < a.length; p++) {
        if (f(a[p],k)) {
            a.unshift(a.splice(p,1)[0])

            return p 
        }


    }

    return -1
}


/*

Scrivere una funzione TypeScript moveToFront1(a, k, f), dove a è un array che rappresenta una lista di valori di un dato tipo, k è un valore di quel tipo, e f è una funzione che confronta due valori di quel tipo e restituisce un valore booleano.



moveToFront1 cerca la prima occorrenza di k nella lista che soddisfa f. Se k si trova nella lista, restituisce la sua posizione nella lista (contando da 0) e porta l’elemento di a che contiene k in testa alla lista, altrimenti restituisce -1.



Nota: Si assuma che la testa della lista sia l'elemento 0 di a, mentre la coda l'ultimo. Come sempre, si curi di definire i tipi nella maniera più precisa possibile.

*/