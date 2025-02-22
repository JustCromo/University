class BNodePost{
    valore;
    label = "";
    children = [];

    constructor(valore, label=""){
        this.valore = valore;
        this.label = label;
    }

    add(...args){
        if(args.length + this.children.length > 2) throw new BadTreeError("errore");
        else{
            for(let i of args){
                this.children.push(i);
            }
        }
    }

    *visit(){

        if(this.children){
            if(this.children[0]) yield* this.children[0].visit();
            if(this.children[1]) yield* this.children[1].visit();
        
        }

        yield this.valore;
        
    }


}


class BadTreeError extends Error{
    constructor(message){
        super(message);
        this.name = "BadTreeError";
    }
}

/*

Si scriva in JavaScript una classe BNodePost che implementi un nodo di un albero binario, con le seguenti caratteristiche:

-ogni nodo ha un campo valore di nome val, di tipo qualunque, un campo label (una etichetta di tipo stringa), e due figli memorizzati in un array children

-il costruttore ha come argomenti il valore e l'etichetta, che per default è vuota

-ogni nodo ha un metodo add() che prende come argomento un numero qualunque di altri BNode, i cui elementi diventano figli del nodo, in ordine da sx a dx. Il tentativo di aggiungere più di due figli deve lanciare una eccezione di tipo BadTreeError (che dovrete definire nel vostro codice), senza aggiungere alcuno dei figli passati

-ogni nodo ha un generatore visit() che restituisce, in post-order (ovvero posticipata: visitando prima i figli nell'ordine in cui sono stati aggiunti e poi il genitore) tutti i valori dei nodi del sottoalbero radicato nel nodo, uno alla volta

*/