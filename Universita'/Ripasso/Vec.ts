class Vec{

    #vettore:[number, number];
    static zero:[number, number] = [0,0];


    constructor(x:number, y:number){
        this.#vettore = [x, y];
    }

    get x():number{
        return this.#vettore[0];
    }

    get y():number{
        return this.#vettore[1];
    }

    sum(w:Vec):Vec{
        return new Vec(this.x+w.x, this.y+w.y);
    }    

    mul(a:number):Vec{
        return new Vec(this.x*a, this.y*a);
    }

    eq(w:Vec):boolean{

        return (this.x === w.x && this.y === w.y);
        
    }


    ax(a:number):string|undefined{

        let s:string|undefined = undefined;

        if(a === this.x) s = "x";
        if(a === this.y){
            if(s === undefined) s = "y";
            else s += "y";
        }

        return s;

    }


}