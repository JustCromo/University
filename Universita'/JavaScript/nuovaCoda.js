function nuovaCoda(){

    let Q = {

        list : [],

        enqueue(n){
            this.list.push(n);
        },

        dequeue(){
            if(this.list == []) return undefined;
            let n = this.list[0];
            this.list.splice(0 ,1);
            return n;
        }



    }

    return Q;

}