interface Nodo<T>{
    val: T;
    figli?: Nodo<T>[];
}

function sbarba<T>(t: Nodo<T>, s:(n: T) => boolean ):void{

    if(t.figli){
            for(let i:number = 0; i<t.figli.length; i++){
                if( s(t.figli[i].val) ){
                    t.figli.splice(i,1);
                    i--;
                }else sbarba(t.figli[i], s);

            }   
    }
}


/*

Si definisca l'interfaccia Nodo per rappresentare alberi k-ari generici con campi val e figli. Si definisca poi una funzione sbarba che, dati in input la radice di un albero e un predicato s, elimini tutti i sottoalberi radicati in un nodo il cui valore soddisfa s.



La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.



Nota: Per predicato si intende una funzione che prende in input un valore e restituisce un booleano.

*/