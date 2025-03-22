interface Tree {
    val?:number,
    sx?:Tree,
    dx?:Tree
};

function PotaAlberiT(T:Tree):void{

    if(T.val !== undefined && T.val < 0){
        delete T.val;
        delete T.sx;
        delete T.dx;
        return;
    }

    if(T.sx){
        if(T.sx.val !== undefined &&T.sx.val < 0) delete T.sx;
        else PotaAlberiT(T.sx);
    }

    if(T.dx){
        if(T.dx.val !== undefined &&T.dx.val < 0) delete T.dx;
        else PotaAlberiT(T.dx);
    }

}


/*
Si scriva in TS una funzione PotaAlberiT(T), che prende come parametro un albero binario T (i cui nodi sono implementati come visto a lezione come oggetti con chiavi val di tipo number, 
sx che contiene il nodo sinistro, e dx che contiene il nodo destro). La funzione taglia i sottoalberi 'secchi'. Un sottoalbero è secco se il valore nella radice del sottoalbero è < 0. 
Il taglio avviene eliminando il nodo secco (si veda l'esempio).

La funzione non deve restituire nulla.


La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.
*/