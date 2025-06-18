function cond<T>(A:[p:(v:T) => boolean, f:(v:T) => T][], v:T):T{
    for(let i of A){
        if(i[0](v)) return i[1](v);
    }

    return v;
}