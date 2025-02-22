function fibonacci(a, b, l){

    let sequenza = [];

    for(let i = 0; i < l; i++){
        sequenza.push(a+b);
        [a, b] = [b, a+b];
    }

    return sequenza;

}

let a = 1;
let b = 1;
let l = 15;

console.log(fibonacci(a, b, l));