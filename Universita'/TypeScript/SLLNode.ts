type SLLNode<T> = {
    val:T;
    next?:SLLNode<T>;
}

function sllLen<T>(n: SLLNode<T>): number {
    if(n == null) return 0;

    let c = 0;

    if(n.next){
        c++;
        c += sllLen(n.next);
    }

    return c;

}