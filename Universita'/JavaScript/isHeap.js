function isHeap(T){

    let flag = true;
    if(!T.figli) return true;

    for(let i of T.figli){
        if(i < T.val) return false;
        flag &= isHeap(i);
    }

    return flag;

}