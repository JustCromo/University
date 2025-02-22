function rpath(T,v){

    if(T.val === v){
        return [T.val]
    }

    if(T.figli != undefined){
         for(let i of T.figli){
        
        let j = rpath(i, v);
        if(j != undefined){
            j.push(T.val)
            return j;
        } 
        
    }

    }
   

    return undefined;
}


/*
Si scriva una funzione JavaScript rpath(T,v) che, ricevuto un albero k-ario T, restituisca un array dei valori dei nodi dell'albero situati lungo
il percorso da un nodo di T con proprietà val avente lo stesso valore e lo stesso tipo di v, alla radice, con sia il nodo che la radice inclusi. 
È garantito che i nodi dell'albero abbiano valori di val tutti distinti. Se non esiste in T un nodo con val uguale a v, la funzione restituisce undefined.



*/