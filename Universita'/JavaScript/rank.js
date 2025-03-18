function rank(A,k){
    
    let classifica = new Map();

    for(let i=0; i < A.length; i++){
        if(!classifica.has(A[i])){
            classifica.set(A[i], 0);
        }else{
            classifica.set(A[i], classifica.get(A[i])+1);
        }
    }

    if(classifica.has(k)){
        return classifica.get(k);
    }else return undefined;
}