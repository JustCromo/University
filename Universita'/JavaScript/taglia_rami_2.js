function tagliaRami(T,v){

    let k = false

    if(T != undefined && v%T.val == 0 ) k = true;

    if(T.figli != undefined){
        for(let i = 0; i<T.figli.length; i++){
            if(tagliaRami(T.figli[i], v)){
                T.figli.splice(i, 1)
                i--;
            }
        }
    }
     
    return k;
}


/*
Sia T un albero k-ario come visto a lezione, e v un valore valido per un nodo dell'albero. Si scriva una funzione JavaScript tagliaRami(T,v)
che modifichi T tagliando tutti i rami (attenzione: non la radice!) che hanno valore val divisore di v.
L'operazione di taglio di un nodo elimina dall'albero il nodo in questione, e l'eventuale sotto-albero radicato nel nodo.

*/