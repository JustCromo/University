function schizzinosa(...num){
    if(num.length == 0) throw new EmptyArgsError("Empty Args!");

    let somma = 0;

    for(let i=0; i < num.length; i++){
        if(num[i] < 0  || num[i] > 1000) throw new BadArgError(i, num[i]);
        if(!Number.isInteger(num[i])) throw new BadArgError(i, num[i]);
        if(!isPrime(num[i])) throw new BadArgError(i, num[i]);

        somma +=num[i];
    }

    return somma;

}

function isPrime(n){
    if (n <= 1) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
        
}

class EmptyArgsError extends Error{
    constructor(messsage){
        super(message);
        this.name = "EmptyArgsError";
    }
}

class BadArgError extends Error{

    pos;
    val;

    constructor(pos, val){
        this.pos = pos;
        this.val = val; 
        super(message);
        if(val < 0  || val > 1000) throw new OutOfRangeError("OutOfRange");
        if(!Number.isInteger(val)) throw new NotIntegerError("NotIntegerError");
        if(!isPrime(val)) throw new NotPrimeError("NotPrimeError");
        this.name = "BadArgsError";
        
    }
}

class OutOfRangeError extends BadArgError{
    constructor(message){
        super(message);
        this.name = "OutOfRangeError";
    }
}

class NotIntegerError extends BadArgError{
    constructor(message){
        super(message);
        this.name = "NotIntegerError";
    }
}

class NotPrimeError extends BadArgError{
    constructor(message){
        super(message);
        this.name = "NotPrimeError";
    }
}





/*
La funzione schizzinosa(n1, ... nk) prende come argomenti una sequenza non-vuota di numeri primi
compresi fra 0 e 1000 (estremi esclusi), e restituisce la loro somma. La funzione non si fida
però del chiamante, e quindi deve controllare che gli argomenti passati siano validi. 
Se la sequenza è vuota, la funzione deve lanciare un EmptyArgsError. Se anche uno solo degli argomenti è invalido, 
la funzione deve lanciare un BadArgError. Gli oggetti BadArgError devono avere due proprietà in sola 
lettura: index è la posizione del primo argomento invalido (da 1 a k inclusi), e value è il valore del primo 
argomento invalido. In particolare, dovete definire eccezioni diverse per i diversi casi: OutOfRangeError se non è incluso entro i 
limiti, NotIntegerError se non è un intero, NotPrimeError se un argomento non è primo. Questi ultimi sono tutti casi particolari di 
BadArgError. Nel caso un argomento violi più di un vincolo, va lanciato il primo errore corrispondente nell'ordine in cui 
li abbiamo elencati.



Si scriva il codice JavaScript che implementa la funzione schizzinosa(). */