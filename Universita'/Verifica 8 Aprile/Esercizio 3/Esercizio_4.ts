class HWMSet<T>{

    static instanze:number = 0;

    multi_insieme:T[];

    constructor(...multiinsieme:T[]){

        if(!multiinsieme) this.multi_insieme = [];
        if(typeof multiinsieme == typeof []){
            for(let i of multiinsieme) this.multi_insieme.push(i);
        }
        else this.multi_insieme = multiinsieme;
        HWMSet.instanze++;
    }





}