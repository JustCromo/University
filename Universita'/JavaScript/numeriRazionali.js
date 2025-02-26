class Razionali{

    #num;
    #den;

    constructor(num, den){
        
        if(den == 0) throw new InputError("Errore");
        if(typeof num != "number") throw new InputError("Errore");
        if(typeof den != "number") throw new InputError("Errore");

        this.#num = num;
        this.#den = den;

        this.#simplify();

    }

    static #gcd(a, b){

        let x = Math.abs(a);
        let y = Math.abs(b);
    
        while(y) [x, y] = [y, x%y]; //destrutturazione
    
        return x;
    }

    #simplify(){
        const m = Razionali.#gcd(this.#num, this.#den);
        const s = this.#den < 0 ? -1:1;
        this.#num = (this.#num/m) * s;
        this.#den = (this.#den/m) * s;
    }

    print(){
        return `${this.#num} / ${this.#den}`;
    }


}


class InputError extends Error{
    constructor(message){
        super(message);
        this.name = "InputError";
    }
}

let a = new Razionali(2, 4);

console.log(a.print());