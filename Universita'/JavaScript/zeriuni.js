function zeriuni(n){
    if(n%1 != 0) throw new NonIntegerError("Errore");
    if(n > 255 || n < 0)  throw new OutOfRangeError("Errore");

    let a = [];

    do{
        if(n%2 == 0) a.push(0)
        else a.push(1);

        n = Math.floor(n / 2);
    }while(n>0);

    while(a.length < 8){
        a.unshift(0);
    }

    return a;

}

class NonIntegerError extends Error{
    constructor(message){
        super(message);
        this.name = "NonIntegerError";
    }
}

class OutOfRangeError extends Error{
    constructor(message){
        super(message);
        this.name = "OutOfRangeError";
    }
}


/*

Scrivere una funzione zeriuni che, dato un numero n (intero e positivo), restituisce un array di 0 e 1 che rappresenti la sua codifica su 8 bit. Gli 0 e 1 devono essere rappresentati come numeri, mettendo il più significativo nella posizione 0 dell'array restituito, e quello meno significativo nella posizione 7.

La funzione zeriuni deve inoltre lanciare due eccezioni NonIntegerError e OutOfRangeError definite opportunamente:

l'eccezione NonIntegerError viene lanciata da zeriuni(n) quando il numero n non è intero, mentre
l'eccezione OutOfRangeError viene lanciata da zeriuni(n) quando il numero n è fuori dal range degli interi positivi rappresentabili su 8 bit.

*/