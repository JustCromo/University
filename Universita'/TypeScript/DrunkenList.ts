class Nodo<T> {
    value: T;
    next: Nodo<T> | undefined;
    prec: Nodo<T> | undefined;

    constructor(value: T){
        this.value = value;
        this.next = undefined;
        this.prec = undefined;
    }
}


class DrunkenList<T>{

    #length:number = 0;
    #head?:Nodo<T>;
    #tail?:Nodo<T>;


    constructor(){
        this.#head = undefined;
        this.#tail = undefined;

    }

    push(value:T){

        const newNodo = new Nodo<T>(value);

        if(this.#length === 0){
            this.#head = this.#tail = newNodo;
            this.#length++;
            return;
        }

        if(this.#length%2 == 0){

            newNodo.next = this.#head;

           if(this.#head) this.#head.prec = newNodo;

            this.#head = newNodo;

            this.#length++;

        }else{

            const headNodo = new Nodo<T>(value);

            headNodo.next = this.#head;

            if(this.#head) this.#head.prec = headNodo;

            this.#head = headNodo;

            const tailNodo = new Nodo<T>(value);

            tailNodo.prec = this.#tail;

            if(this.#tail) this.#tail.next = tailNodo;

            this.#tail = tailNodo;

            this.#length += 2;

        }

    }

    pop():T{

        if(this.#length === 0 || !this.#head || !this.#tail) throw new ReferenceError("No!");

        let value:T;

        if(this.#length%2 == 1){

            value = this.#head.value; 
            this.#head = this.#head.next;

            if(this.#head) this.#head.prec = undefined;
            else this.#tail = undefined;

        }else{

            value = this.#tail.value;
            this.#tail = this.#tail.prec;

            if(this.#tail) this.#tail.next = undefined;
            else this.#head = undefined;

        }  

        this.#length--;
        return value;

    }

    as_array():T[]{

        let arr:T[] = [];

        let current = this.#head;

        while(current){
            arr.push(current.value);
            current = current.next;
        }

        return arr;

    }

}