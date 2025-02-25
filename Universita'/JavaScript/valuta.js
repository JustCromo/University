/*
Si consideri una struttura di dati di tipo albero k-ario come visto a lezione, rappresentato con oggetti JavaScript. 
Se i figli mancano, il campo figli è undefined. Per i nodi foglia, val è un valore numerico. Per i nodi interni, 
val è una funzione con un parametro numerico e che restituisce un valore numerico.

A ogni nodo è inoltre associato un peso (NOTA: il peso di un nodo non è memorizzato in nessuna proprietà del nodo stesso).

Per le foglie il peso è uguale a val. Per calcolare il peso di un nodo interno, bisogna applicare la funzione
memorizzata in val sulla somma dei pesi dei suoi nodi figli.

Si scriva una funzione javaScript valuta(t) che, dato un albero definito come sopra, restituisce il peso della radice. */

function valuta(T){

    if(!T.figli) return T.val;

    let n = 0;

    for(let i = 0; i<T.figli.length; i++){

        n += valuta(T.figli[i]);

    }
    
    return T.val(n);

}