class DrunkenList{

    head;
    tail;
    length;

    constructor(){
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    push(obj){

        if(this.length == 0) {
            
            this.head = this.tail = new Nodo(obj);
            this.length++
            return
            
        }

        if (this.length % 2 == 1) {
            
            let n = new Nodo(obj);
            this.tail.next = n;
            n.prec = this.tail;
            this.tail = n;
            this.length++;
            
        }

        let n = new Nodo(obj);
        this.head.prec = n;
        n.next = this.head;
        this.head = n;
        this.length++;
        
    }


    pop(){
        
        if(this.length == 0) throw new ReferenceError("Errore");

        let retVal;
        
        if(this.length%2 == 0){
            
            retVal = this.tail.value;
            this.tail = this.tail.prec
            this.tail.next = undefined;
            
        } else {
            
            retVal = this.head.value;
            
            if(this.length == 1) {
                
                this.head = this.tail = undefined;
                
            } else {
                
                this.head = this.head.next;
                this.head.prec = undefined;
                
            }
            
        }

        this.length--;
        return retVal;
        
    }

    as_array(){

        let arr = [];
        let origin = this.head;
        
        while (this.head != undefined){
            
            arr.push(this.head.value)
            this.head = this.head.next;
            
        }
        
        this.head = origin;
        return arr
        
    }



}


class Nodo {
    value;
    next;
    prec;

    constructor(value){
        this.value = value;
        this.next = undefined;
        this.prec = undefined;
    }
}


/*
Si scriva in JS una struttura dati generica DrunkenList che implementi una linked list (lista collegata) su degli oggetti generici di tipo Nodo.

La classe DrunkenList prevede un costruttore senza argomenti per inizializzare una lista vuota, una proprietà length contenente il numero di elementi della lista, ed espone le seguenti operazioni:

push che prende come argomento un oggetto e lo inserisce in testa se la lista contiene un numero pari di elementi, sia in testa che in coda se contiene un numero dispari di elementi.
pop che rimuove e ritorna l'elemento in testa alla lista se questa ha un numero dispari di elementi, l'elemento in coda se invece la lunghezza è pari. Nel caso la lista sia vuota, la funzione lancia un’eccezione con tipo ReferenceError (non la dovete ridefinire voi).
as_array che restituisce il contenuto della lista sotto forma di array.


Nota: la lista deve essere implementata in modo collegato (linked).

Per l'implementazione della classe Nodo, si faccia riferimento al seguente snippet (da copiare nel vostro codice):

class Nodo {
    value;
    next;
    prec;

    constructor(value){
        this.value = value;
        this.next = undefined;
        this.prec = undefined;
    }
}

*/