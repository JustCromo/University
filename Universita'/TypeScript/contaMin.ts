interface Tree {
    sx?:Tree,
    dx?:Tree,
    val:number,
    piccolo:number
}

function contaMin(T:Tree):number{

    if(!T) return Infinity;

    let min:number = T.val;

    if(T.sx) min = Math.min(contaMin(T.sx), min);

    if(T.dx) min = Math.min(contaMin(T.dx), min);

    T.piccolo = min;

    return min;

}

