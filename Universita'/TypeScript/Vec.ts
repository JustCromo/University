interface Vettore {
    x:number;
    y:number;
    
}

class Vec{

    #vet:Vettore;
    zero:Vettore = {x:0,y:0};

    constructor(x:number, y:number){
        this.#vet = {x, y};
    }

    sum(w:Vettore):Vettore{
        
        let x = this.#vet.x + w.x;
        let y = this.#vet.y + w.y;
        let k:Vettore = {x, y}

        return k;
    }

    mul(a:number):Vettore{
        
        let x = this.#vet.x * a;
        let y = this.#vet.y * a;
        let k:Vettore = {x, y}

        return k;
    }

    eq(w:Vettore):boolean{

        if(this.#vet.x == w.x && this.#vet.y == w.y) return true;

        return false;
    }

    ax(a:number):string|undefined{
        if(this.#vet.x === a && this.#vet.y === a) return "xy";
        if(this.#vet.x === a) return "x";
        if(this.#vet.y === a) return "y";

        return undefined;
    }

    ax1(a:number):string|undefined{
        let r:string|undefined = '';
        if(this.#vet.x === a) r += 'x';
        if(this.#vet.y === a) r += 'y';
        if(r === '') return undefined;
        return r;
    }

    get x(){return this.#vet.x};

    get y(){return this.#vet.y};


}