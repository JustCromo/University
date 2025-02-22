type Nodo<T> = {
    val: T;
}

type Grafo<T> = {
    nodi:  Set<Nodo<T>>;
    archi: Set<{da:Nodo<T>, a:Nodo<T>}>;
}

function cycCheck<T>(n:Nodo<T>, G:Grafo<T>, k:number):Nodo<T>[]{

    if(k == 0) return [];
    let a:Nodo<T>[] = [];

    //let l:number = a

    /*
    n n->a n->c n->d

    G.archi
    */
/*
    for(let i:number = 0; i < .length; i++){
        a.push(n.a[i]);
        a.concat(cycCheck(n.a[i], G, k-1));
    } */


    return a;
}