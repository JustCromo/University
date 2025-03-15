type Data = [
    giorno:number,
    mese:string,
    anno:number
];

type Evento = [
    data:Data,
    descrizione:string
];

class Agenda{

    max_events:number;

    arr:Evento[];

    constructor(max:number){
        this.max_events = max;
        this.arr = [];
    }

    aggiungi(evento:Evento):void{

        if(this.lista_eventi(evento[0]).length == this.max_events) throw new GiornoPienoError("GiornoPieno!");
        else this.arr.push(evento);
            
    }

    lista_eventi(data:Data):Evento[]{

        let output:Evento[] = [];

        for(let i of this.arr){
            if(data[0] == i[0][0] && data[1] == i[0][1] && data[2] == i[0][2]) output.push(i);
        }

        return output;
    }

    libera(data:Data){

        let c:number = this.lista_eventi(data).length;

        for(let i:number = 0; i < this.arr.length; i++){
            if(data[0] == this.arr[i][0][0] && data[1] == this.arr[i][0][1] && data[2] == this.arr[i][0][2]){
                this.arr.splice(i,1);
                i--;
            }
        }

        return c;
    }
            
}


class GiornoPienoError extends Error{
    constructor(message:string){
        super(message);
        this.name = "GiornoPienoError";
    }
}

/*
Si definisca in TS una classe Agenda il cui costruttore prende in input il numero massimo di eventi che possono essere memorizzati 
per giorno nell'agenda. Gli eventi sono gestiti tramite un array di tipo Evento.

Ogni (tipo) Evento è modellato come una tupla contenente un oggetto di tipo Data ed una stringa rappresentante la descrizione dell'evento.

A sua volta, (il tipo) Data è una tripla che codifica il giorno come un numero, il mese come una stringa, e l'anno come un un numero.


La classe Agenda dispone dei seguenti metodi:

aggiungi: il metodo permette di inserire un oggetto Evento all'interno dell'agenda. 
La funzione controlla il massimo numero di eventi giornalieri e lancia un'eccezione GiornoPienoError se questo 
fosse superato dall'aggiunta del nuovo evento.
lista_eventi: il metodo restituisce un array contenente tutti gli Eventi registrati nella Data passata come argomento.
libera: Dato un oggetto Data passato come argomento, il metodo elimina tutti gli eventi presenti nella giornata in input 
e restituisce il numero di eventi cancellati.


La soluzione deve essere scritta in TypeScript, tenendo conto della corretta dichiarazione dei tipi in ingresso 
ed in uscita dei metodi (e non usando any o unknown).
*/