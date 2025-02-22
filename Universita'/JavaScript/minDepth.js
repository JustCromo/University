function minDepth(T){


    if(T == undefined || (T.sx == undefined && T.dx == undefined) ) return 0;

    let min = +Infinity;

    if(T.sx != undefined){
        let tsx = 1;
        tsx += minDepth(T.sx);
        if(tsx < min ) min = tsx;

    }

    if(T.dx != undefined){
        let tdx = 1;
        tdx += minDepth(T.dx);
        if(tdx < min ) min = tdx;

    }

    return min;
 
}

/*
Si scriva una funzione JS minDepth(T), dove T è un albero binario come descritto a lezione (oggetti con chiavi val e sx e dx). La funzione deve restituire la minima profondità dell'albero
T: la lunghezza del cammino più corto tra tutti quelli che vanno dalla radice alle sue foglie (la radice ha profondità zero).

*/