class Tree {

    val;
    sx;
    dx;
    constructor(v = null,s = null,d = null){
        this.val=v;
        this.sx=s;
        this.dx=d;
    }
    
}


function map_tree(tree, sf, df){
    function inner(t,f){
        if(!t) return null
        if(!f) f = x=>x
        return new Tree (f(t.val),inner(t.sx,sf),inner(t.dx,df))
    }
    return inner(tree,sf)
}