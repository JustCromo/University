interface Nodo{
    adj:Nodo[],
    val:number,
    color:string,
    p:Nodo|null,
    d:number
}


function BFS(G:Nodo[], s:Nodo):void{

    for(let i of G){
        i.color = "BIANCO";
        i.d = Infinity;
        i.p = null;
    }

    s.d = 0;
    s.color = "GRIGIO"; // --> tutta parte di inizializzazione

    let Q:Nodo[] = [s];

    while(Q.length != 0){

        let u:Nodo = Q.shift()!;

        for(let v of u.adj){
            if(v.color == "BIANCO"){
                v.color = "GRIGIO";
                v.p = u;
                v.d = u.d + 1;
                Q.push(v);
            }
        }

        u.color = "NERO";

    }

    return;
}

