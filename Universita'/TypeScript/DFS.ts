interface Nodo{
    color:string,
    p:Nodo|null,
    d:number,
    f:number,
    val:number,
    adj:Nodo[]
};

interface Graph{
    V:Nodo[],
    E:[Nodo, Nodo][]
}

let time;

function DFS(G:Graph):void{

    for(let u of G.V){
        u.color = "BIANCO";
        u.p = null;
    }

    time = 0;

    for(let u of G.V){
        if(u.color == "BIANCO"){
            DFS_Visit(u);
        }
    }

    return;

}


function DFS_Visit(u:Nodo):void{

    u.color = "GRIGIO";
    time = time+1;
    u.d = time;

    for(let v of u.adj){
        if(v.color == "BIANCO"){
            v.p = u;
            DFS_Visit(v);
        }
    }

    u.color = "NERO";
    time = time+1;
    u.f = time;

    return;

}