class Jar{

    #cache;

    constructor(){
        this.#cache = {};
    }

    add(m,v){
        if(this.#cache[m]){
            this.#cache[m] = this.#cache[m].concat([v]);
        }else{
            this.#cache[m] = v;
        }
    }

    reset(){
        this.#cache = {};
    }

    read(s){

        let obj = {};

        for(let key of Object.keys(this.#cache)){

            if(this.#cache[key].test(s)){
                for(let i of this.#cache[key]) obj[i] = 1;
            }

        }

        return obj;
    }
}