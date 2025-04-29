function rank(A, k){

    let c = {};

    for(let i of A){
        if(!c[i]) c[i] = 1;
        else c[i]++;
    }
    console.log(c)

    let ob = {};
    let rank = 1;

    while(Object.keys(c).length != 0){
        let max = -Infinity
        for(let i of Object.keys(c)){
           if (max < c[i]) {
            max = c[i]
           }
        }
        for(let i of Object.keys(c)){
            if (max === c[i]) {
                ob[i] = rank
                delete c[i]
            }
            console.log(ob)
        }
        rank++;
    }

    return ob[k]

}
let X = [12,12,12]
console.log(rank([1,3,2,1,2,3,1,1,3,2,'t','t',X,X,X,X,X],9))