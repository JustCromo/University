type SLLNode<T> = {
    val:T;
    next?:SLLNode<T>;               
}

function sllLen<T>(n: SLLNode<T>|null): number {
    if(n === null) return 0;
    if(n.next === undefined) return 1;         

    let c:number = 0;

    if(n.next !== null){                     
        c++;
        c += sllLen(n.next);
    }

    return c;               

}