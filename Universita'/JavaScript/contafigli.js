function contafigli(T){

    if(!T) return [0,0];

    let s = 0;
    let d = 0;

    if(T.sx){
        s++;

        s += contafigli(T.sx)[0];
        d += contafigli(T.sx)[1];
    }

    if(T.dx){
        d++;

        s += contafigli(T.dx)[0];
        d += contafigli(T.dx)[1];
    }


    return [s,d];
}