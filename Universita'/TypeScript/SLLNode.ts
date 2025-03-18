type SLLNode<T> = {
    val:T;
    next?:SLLNode<T>;               // ... || undefined.
}

function sllLen<T>(n: SLLNode<T>): number {
    if(n == null) return 0;         // if(n.next == undefined) return 1;

    let c:number = 0;

    if(n.next){                     // if andava sopra. qui e' semplicemente c = 1 + sllLen(n.next);
        c++;
        c += sllLen(n.next);
    }

    return c;               

}