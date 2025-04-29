function schizzinosa(...num){

    if(num.length == 0) throw new EmptyArgsError("Emptie");

    let somma = 0;

    for(let i = 0; i < num.length; i++){

        if(num[i] <= 0 || num[i] >= 1000) throw new OutOfRangeError("OutDiRangie", i, num[i]); 

        if(!Number.isInteger(num[i])) throw new NotIntegerError("NoInt", i, num[i]);

        if(!isPrime(num[i])) throw new NotPrimeError("NoElPrimo", i, num[i]);

        somma += num[i];

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

    constructor(message) {
        this.name = "EmptyArgsError";
        super(message);
    }

}

class BadArgError extends Error{

    index;
    value;

    constructor(message, index, value){
        this.index = index;
        this.value = value;
        this.name = "BadArgsError";
        super(message);
    }
}

class OutOfRangeError extends BadArgError{

    index;
    value;

    constructor(message, index, value){
        this.name = "OutOfRange";
        super(message, index, value);
    }
}

class NotIntegerError extends BadArgError{

    index;
    value;

    constructor(message, index, value){
        this.name = "NotIntegerError";
        super(message, index, value);
    }
}

class NotPrimeError extends BadArgError{

    index;
    value;

    constructor(message, index, value){
        this.name = "NotPrimeError";
        super(message, index, value);
    }
}