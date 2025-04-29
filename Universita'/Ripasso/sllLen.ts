type SLLNode<T> = {
    val:T,
    next:SLLNode<T> | null;
}

function sllLen<T>(n:SLLNode<T> | null):number{

    if(n === null) return 0;

    return 1+sllLen(n.next);
}