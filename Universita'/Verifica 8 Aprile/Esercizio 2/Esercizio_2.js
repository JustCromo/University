

function ts(T, p, R){

    if(p == "") return;

    let s = p.split("");
    let path = [];
    for(let i of s) path.push(parseInt(i));

    if(!T.figli[path[0]]){

        let miss = "";
        for(let i = 1; i < path.length; i++) miss += path[i];
        throw new NotFoundError("NotFound",T , path[0].toString, miss);

    }

    if(path.length == 1){
        T.figli[0] = R;
    }

    path.shift();

    ts(T.figli[path[0]], path.toString(), R);


}

class NotFoundError extends Error{

    tree;
    upto;
    miss;

    constructor(message, tree, upto, miss){
        super(message);
        this.name = "NotFoundError";
        this.tree = tree;
        this.upto = upto;
        this.miss = miss;
    }

}

let p = "3456";

let s = p.split("");
let path = [];
for(let i of s) path.push(parseInt(i));

console.log(path[0])