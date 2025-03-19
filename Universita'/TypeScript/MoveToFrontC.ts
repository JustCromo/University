
class MoveToFrontC<T>{

    a:T[];

    f:(n1:T, n2:T) => boolean;

    constructor(arr:T[], fun:(n1:T, n2:T) => boolean){
        this.a = arr;
        this.f = fun;
    }

    move(k:T):number{

        for(let i:number = 0; i<this.a.length; i++){

            if(this.f(this.a[i], k)){
                this.a.unshift(this.a.splice(i ,1)[0]);
                return i;
            }

        }

        return -1;
    }

}