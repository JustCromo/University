/*function rank(A,k){
    
    let classifica = new Map();

    for(let i=0; i < A.length; i++){
        if(!classifica.has(A[i])){
            classifica.set(A[i], 1);
        }else{
            classifica.set(A[i], classifica.get(A[i])+1);
        }
    }

    if(classifica.has(k)){
        return classifica.get(k);
    }else return undefined;
}*/

function rank(A,k){

    let cache = {};
    let flag = false;

    for(let i of A) {
        flag = false
        for (k of Object.keys(cache)){
            if (i === k) {
                flag = true;
                break;
            }
        }

        if(flag) {
            cache[i]++
            continue;
        }
        cache[i]=1;

    }
    if(cache[k])
        return cache[k];
    return undefined;
}