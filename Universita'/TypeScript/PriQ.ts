class PriQ<P>{

    #coda:{pri:P}[];
    foo;

    constructor(f:(a:P, b:P) => number){
        this.foo = f;
    }

    insert(e:{pri:P}){
        this.#coda.push(e);
    }

    xmax():{pri:P}|undefined{

        


        return undefined;
    }

    cntabove(p:{pri:P}):number{
        return 0;
    }


}