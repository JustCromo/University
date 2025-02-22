class Limortacci{

    #seq = [];
    #k = null;
    #count = 1;

    constructor(...seq){

        for(let i = 0; i < seq.length; i++) this.#seq.push(seq[i]);
        this.#k = seq.length;
    }

    *succ() {
        while(true){
            if(this.#count <= this.#k){

                this.#count++;
                yield this.#seq[this.#count-2];
                
            }else{
                let c = this.#count;
                let result = 0;
    
                for(let i=0; i<this.#k; i++){
                    result += this.#seq[c-2];
                    c--;
                }
    
                this.#count++;
                this.#seq.push(result);
                yield result;
    
            }
        }
    }

}


var l2m12=new Limortacci(2,-1,2)
var x=l2m12.succ(), r=[]
for (var i=0;i<10;i++){
    r.push(x.next().value)
}

console.log(r);