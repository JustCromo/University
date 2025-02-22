function moveToEnd1<T>(a:T[],k:T, f: (a:T, b:T) => boolean):number{

    for(let i:number = 0; i<a.length; i++){
        if(f(a[i], k)){
            a.push(a.splice(i,1)[0]);
            return i;
        }
    }

    return -1;
}

/*

Scrivere una funzione TypeScript moveToEnd1(a, k, f), dove a è un array che rappresenta una lista di valori di un dato tipo, k è un valore di quel tipo, e f è una funzione che confronta due valori di quel tipo e restituisce un valore booleano.



moveToEnd1 cerca la prima occorrenza di k nella lista che soddisfa f. Se k si trova nella lista, restituisce la sua posizione nella lista (contando da 0) e porta l’elemento di a che contiene k in fondo alla lista, altrimenti restituisce -1.



Nota: Si assuma che la testa della lista sia l'elemento 0 di a, mentre la coda l'ultimo. Come sempre, si curi di definire i tipi nella maniera più precisa possibile.

*/