function sxdx(t:Tree):[string, string]{

    let temp:Tree = t;
    let l:string = t.val;
    let r:string = t.val;

    while(temp.sx){
        
        l += temp.sx.val;
        temp = temp.sx;

    }

    temp = t;


    while(temp.dx){
        
        r += temp.dx.val;
        temp = temp.dx;

    }

    return [l, r];
}

type Tree = {
    val:string,
    sx?: Tree,
    dx?: Tree
}

/*

Si scriva una funzione Typescript sxdx(T) che, ricevuto come argomento un albero binario T strutturato come visto a lezione
(oggetti con chiavi val di tipo string, sx che contiene il nodo sinistro, e dx che contiene il nodo destro), e con valori di tipo stringa,
restituisca una coppia [l,r] in cui l è la stringa che si ottiene concatenando i valori di tutti i nodi, partendo dalla radice e scendendo sempre a sinistra finché è possibile,
mentre r è la analoga stringa ottenuta scendendo sempre a destra.

La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.

 */