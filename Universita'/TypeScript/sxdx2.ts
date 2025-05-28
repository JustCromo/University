type Nodo{
    val:string,
    sx?:Nodo,
    dx?:Nodo
}

function sxdx(T:Nodo):[string, string]{
    
    let l:string = T.val;
    let r:string = T.val;
    let Tdx:Nodo = T;

    while(T.sx){
        l += T.sx.val;
        T = T.sx;
    }

    while(Tdx.dx){
        r += Tdx.dx.val;
        Tdx = Tdx.dx;
    }

    return [l, r];

}