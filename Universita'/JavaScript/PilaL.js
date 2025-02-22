/*
Si scriva in JavaScript una sottoclasse di Array, di nome PilaL, che è destinata a implementare una pila a lunghezza limitata,
e ha lo stesso comportamento di Array con soltanto queste modifiche:

Le istanze di PilaL hanno una proprietà max che determina la massima lunghezza che l'array può raggiungere. Quando viene assegnato un valore a max, 
se la lunghezza corrente della pila è superiore, la pila viene "scorciata" eliminando gli elementi più vecchi (ovvero: inseriti meno recentemente con push()). 
La lettura di max restituisce l'ultimo valore assegnato a max. Alla creazione di una PilaL, il valore di default di max è 10.
Le istanze di PilaL hanno un metodo push(e) inserisce e in coda all'array, come di consueto, ma se così facendo la lunghezza supera il max, 
allora il primo elemento (quello più in fondo nella pila) viene eliminato, in modo che la lunghezza non superi max.
Per evitare confusione fra pile e code, le chiamate a shift() e unshift() su un oggetto PilaL non hanno nessun effetto.
 */


class PilaL extends Array {

    #max_length;

    constructor(){

        super();
        this.#max_length = 10;

    }

    get max(){

        return this.#max_length;

    }

    set max(n){

        this.#max_length = n;
        while (this.length > this.#max_length) {
            super.shift();
        }
        
    }

    push(e){

        super.push(e);
        while (this.length > this.#max_length){

            super.shift();

        }

    }

    shift(){
        return
    }

    unshift(e){
        return
    }

}

let a = new PilaL();

console.log(a.max);

a.max = 4;

console.log(a.max);

a.max = 8;

console.log(a.max);

var assert = require('assert')

var p1=new PilaL(), p2=new PilaL()
p1.max=3; p2.max=5
for (var i=0;i<10;i++) { 
    p1.push(i); 
    p2.push(i);
    console.log(p1,'\n', p2)
}
p1.pop()
console.log(p1,'\n', p2)
p1.shift()
console.log(p1,'\n', p2)
p2.unshift(3)
console.log(p1,'\n', p2)
assert.deepEqual(p1,[7,8])
assert.deepEqual(p2,[5,6,7,8,9])