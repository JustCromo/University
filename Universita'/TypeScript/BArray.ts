class BArray<T>{

    #arr:T[] = [];
    #a:number;
    #b:number;

    constructor(a:number, b:number, init:T){

        this.#a = a;
        this.#b = b;
        let i:number = 0;

        while(a != b){

            this.#arr[i] = init;
            i++;            
            a++;
        }
    }


    length():number{ return this.#arr.length}

    get(i:number):T|undefined{

        if(i < this.#a || i >= this.#b) throw new OutOfBoundsError("No");
        let a:number = this.#a;
        let b:number = this.#b;
        let c:number = 0;

        while(a != b){

            if(c == i) return this.#arr[i];
            c++;
            a++;

        }
    }

    set(i:number, v:T):void{
        if(i < this.#a || i >= this.#b) throw new OutOfBoundsError("No");
        let a:number = this.#a;
        let b:number = this.#b;
        let c:number = 0;

        while(a != b){

            if(c == i) this.#arr[i] = v;
            c++;
            a++;

        }
    }



}

class OutOfBoundsError extends Error{

    index:number;
    bounds

    constructor(message:string){
        super(message);
        this.name = "KomInvalidError";
    }

}