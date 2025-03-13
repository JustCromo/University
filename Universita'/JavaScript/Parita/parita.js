
function parita(T){

    if(!T) return 0;

    let csx = 0;
    let cdx = 0;

    if(T.sx){
        csx++;
        csx += parita(T.sx);
    }

    if(T.dx){
        cdx++;
        cdx += parita(T.dx);
    }

    if((csx+cdx)%2 == 0) T.par = true;
    else T.par = false;

    return (csx+cdx);

}

/*
Sia T un ABR come definito a lezione; in aggiunta, ogni nodo ha una proprietà booleana par.

-Si scriva in L senza tipi una funzione parita(T), che dato un ABR T scriva nella proprietà par di ogni nodo x 
di T il valore true se il numero di nodi nel sottoalbero radicato in x è pari, senza considerare x, e false altrimenti. 
Si descriva accuratamente la funzione scritta.

-Si indichi, motivando accuratamente la risposta, la complessità della funzione parita(T)
*/