type Binno<V> = {
    val:V,
    sx?:Binno<V>,
    dx?:Binno<V>
}

type Strat = "pre" | "in" | "post";

function ambula<V>(T:Binno<V>, s:Strat, a:(x:Binno<V>) => void):void{

    switch(s){

        case "pre":
            pre(T, a);
        break;

        case "post":
            post(T, a);
        break;

        case "in":
            sim(T, a);
        break;

    }


}

function pre<V>(T:Binno<V>, a:(x:Binno<V>) => void):void{

    if(T) a(T);
    if(T.sx) pre(T.sx, a);
    if(T.dx) pre(T.dx, a);

}

function post<V>(T:Binno<V>, a:(x:Binno<V>) => void):void{

    if(T.sx) post(T.sx, a);
    if(T.dx) post(T.dx, a);
    if(T) a(T);

}

function sim<V>(T:Binno<V>|undefined, a:(x:Binno<V>) => void):void{

    
    if(T != null){

        sim(T.sx, a);
        a(T);
        sim(T.dx, a);

    }
    
}
