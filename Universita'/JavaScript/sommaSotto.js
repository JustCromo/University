
function sommaSotto(T){

    if(!T) return 0;

    T.res = T.val;

    if(T.sx) T.res += sommaSotto(T.sx);

    if(T.dx) T.res += sommaSotto(T.dx);

    return T.res;
}

/*
dato un albero binario avente come attributi i valori val, sx, dx e res, scrivere una funzione sommaSotto(T)
che scriva nell'attributo res di ogni nodo t la somma dei valori (val) di tutti i nodi appartenenti al sotto-albero 
di t (considerando anche t nella somma)


Determinare la complessita' della funzione appena scritta --> O(n)

 */

