type Vettore = {
    x:number;
    y:number;
}

class Vec{

    vet:Vettore;

    constructor(x:number, y:number){
        this.vet.x = x;
        this.vet.y = y;
    }

    sum(w:Vettore):Vettore{
        
        let x = this.vet.x + w.x;
        let y = this.vet.y + w.y;
        let k:Vettore = {x, y}

        return k;
    }

    mul(a:Vettore):Vettore{
        
        let x = this.vet.x * a.x;
        let y = this.vet.y * a.y;
        let k:Vettore = {x, y}

        return k;
    }

    eq(w:Vettore):boolean{

        if(this.vet.x == w.x && this.vet.y == w.y) return true;

        return false;
    }

    


}