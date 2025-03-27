/*
Si scriva una funzione JS stampaC(T) con T un Albero Binario di Ricerca (ABR).



L'albero binario di ricerca è rappresentato come visto a lezione, i cui nodi sono oggetti con tre proprietà: val (contenente un valore intero), 
sx (un riferimento al nodo sinistro) e dx (un riferimento al nodo destro).



La funzione deve restituire un array contenente in ordine crescente i valori dei nodi di T che abbiano almeno un figlio a valore pari. 
Non è possibile usare nessuna funzione di ordinamento.
*/

function stampaC(T){

    if(!T) return [];

    let arr = [];
    let sx = false;

    if(T.sx){
        arr = stampaC(T.sx).concat(arr);
        if(T.sx.val%2 == 0){
            sx = true;
            arr.push(T.val);
        }
    }

    if(T.dx){
        if(T.dx.val%2 == 0 && !sx){
            arr.push(T.val);
        }
        arr = arr.concat(stampaC(T.dx));
    }

    return arr;

}