class SecretBox<T> {

    #secret:Map<string, number>;
    #box:Map<string, T>;
    #s: number;

    constructor(){
        this.#secret = new Map();
        this.#box = new Map();
        this.#s = 0;
    }

    putS(k: string, pin:number, val:T):void{
        if(!this.#secret.has(k)){

            this.#secret.set(k, pin);
            this.#box.set(k, val);
            this.#s++;

        }else if(this.#secret.get(k) == pin) this.#box.set(k, val);
        else throw new SecretError("NO! - の! - NE! - NEIN!")
    }

    getS(k: string, pin: number):T{

        if(this.#secret.has(k) && this.#secret.get(k) == pin) return this.#box.get(k) as T;
        else throw new SecretError("Password Errata o Chiave non trovata...")

    }

    delS(k: string, pin: number){
        if(this.#secret.has(k) && this.#secret.get(k) == pin){
            this.#secret.delete(k);
            this.#box.delete(k);
            this.#s--;
        }
        else throw new SecretError("Password Errata o Chiave non trovata...")
    }

    get size(){
        return this.#s;
    }


}

class SecretError extends Error{
    constructor(message:string){
        super(message);
        this.name = "SecretError";
    }
}

/*

Si scriva in TypeScript una class SecretBox che funge da contenitore di coppie chiave-valore, in cui la chiave è una stringa e il valore è di un dato tipo T, in cui ciascuna coppia è protetta da un codice di sicurezza (un pin) numerico.

Gli oggetti di classe SecretBox devono offrire le seguenti caratteristiche:

Un costruttore che inizializza una secret box vuota.
Un metodo putS(k,pin,val) per memorizzare il valore val associato alla chiave k, protetto dal pin. Se non c'è una coppia con chiave k nella box, allora viene memorizzata la coppia (k,val), protetta dal pin. Se k è già presente nella box, e il pin è corretto, allora si aggiorna il valore associato a k con il nuovo val. Se k è già presente nella box, e il pin è errato, viene lanciata un'eccezione di tipo SecretError (che dovrete definire).
Un metodo getS(k,pin) per recuperare il valore val associato alla chiave k, protetto dal pin. Se k è presente nella box, e il pin è corretto, viene restituito il val associato a k. In tutte le altre situazioni (k assente o pin errato), viene lanciata una SecretError.
Un metodo delS(k,pin) per cancellare una coppia (k, val) dalla box. Se k è presente nella box, e il pin è corretto, allora viene cancellata la coppia (k,val) dalla box. In tutte le altre situazioni (k assente o pin errato), viene lanciata una SecretError.
Una proprietà size che restituisca il numero di coppie memorizzate in un dato momento nella box.
La SecretBox deve essere ovviamente segreta; nessuna informazione deve essere accessibile all'esterno se non come indicato sopra. Come sempre, si curi di annotare con la maggior precisione possibile i tipi.

*/