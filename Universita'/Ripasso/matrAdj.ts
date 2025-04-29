class Grafo<T>{

    nodi:Nodo<T>[];
    archi:Arco<T>[];

    constructor(nodi:Nodo<T>[], archi:Arco<T>[]){
        this.nodi = nodi;
        this.archi = archi;
    }

    matrAdj():Nodo<T>[][]{

        let matrAdj:Nodo<T>[][] = [];

        for(let i of this.nodi){

            let arr:Nodo<T>[] = [];

            for(let j of this.archi){

                if(i === j.da){
                    arr.push(j.a);
                }

            }

            matrAdj.push(arr);

        }

        return matrAdj;
    }


    matrInc():number[][]{

        let num:number[][] = [];

        for(let i:number = 0; i < this.nodi.length; i++){

            let arr:number[] = [];

            for(let j: number = 0; j < this.archi.length; j++){

                switch(this.nodi[i]){

                    case this.archi[j].da:
                        arr[j] = -1;
                    
                    case this.archi[j].a:
                        arr[j] = 1;
                    break;

                    default: arr[j] = 0;

                }

            }

            num.push(arr);

        }

        return num;

    }

}


class Nodo<T>{

    label:T;

    constructor(label:T){
        this.label = label;
    }

}

class Arco<T>{

    da:Nodo<T>;
    a:Nodo<T>;

    constructor(da:Nodo<T>, a:Nodo<T>) {
        this.da = da;
        this.a = a;
    }

}


let A:Nodo<string> = new Nodo ('A')
let B:Nodo<string> = new Nodo ('B')
let C:Nodo<string> = new Nodo ('C')

let AB:Arco<string> = new Arco (A,B)
let AC:Arco<string> = new Arco (A,C)
let BC:Arco<string> = new Arco (B,C)
let CA:Arco<string> = new Arco (C,A)
let G:Grafo<string> = new Grafo([A,B,C],[AB,AC,BC,CA])

console.log(G.matrAdj())

console.log(G.matrInc())