interface Nodo{
    sx?:Nodo,
    dx?:Nodo,
    val:number,
    conta:number
};

function contaAlbero(T:Nodo|undefined):number{

    if(!T) return 0;

    T.conta = contaAlbero(T.dx);

    return T.conta + contaAlbero(T.sx) + 1;
}



/*
Si scriva in TS una funzione contaAlbero(T) che, dato un albero binario T come argomento, 
conti per ogni nodo t in T (inclusa la radice) il numero di nodi appartenenti al sotto-albero destro di cui t è radice (t escluso). 
Questo valore deve essere scritto in conta.
*/