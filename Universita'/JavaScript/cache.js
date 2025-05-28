let cache = {};

function useCache(a, f){

    let b = [];

    for(let i of a){

        if(cache[i] == undefined) cache[i] = f(i);

        b.push(cache[i]); 

    }

    return b;

} 

const foo = (x) => (x*2)+5;

const arr = [10, 3, 4, 4, 5,2, 6, 63, 7, 10, 11];


console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));
console.log(useCache(arr, foo));

