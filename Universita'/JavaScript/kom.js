class Kom{

    #valid = true; 
    #def_valid = true;
    #foo;

    constructor(f){
        this.#foo = f;
    }

    do(){
        if(this.#def_valid){
            if(this.#valid)  this.#foo();
        }
        else throw new KomInvalidError("Invalid");
    }

    re(){ if(this.#valid) return this.#foo() }

    mi(){
        if(this.#def_valid == false) throw new KomInvalidError("Invalid");
        this.#valid = false;
    }

    fa(n){

        if(this.#def_valid){
            if(this.#valid){
                for(let i=0; i<n; i++) this.#foo();
            }
        }else throw new KomInvalidError("Invalid");

    }

    sol(b){

        if(this.#def_valid == false) throw new KomInvalidError("Invalid");
        this.#valid = b;

    }

    la(){

        if(this.#def_valid == false) throw new KomInvalidError("Invalid");
        this.#valid = true;

    }

    si(){
        if(this.#def_valid == false) throw new KomInvalidError("Invalid");
        this.#def_valid = false;
    }



}

class KomInvalidError extends Error{

    constructor(message){
        super(message);
        this.name = "KomInvalidError";
    }

}