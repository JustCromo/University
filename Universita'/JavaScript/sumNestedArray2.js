function sumNestedArray(A){

    let sum = 0;

    for(let i of A){

        if(Array.isArray(i)) sum += sumNestedArray(i);
        else sum += i;
    }

    return sum;

}