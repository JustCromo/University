function MS(A) {
  return A.length<2?[A.length]:[...MS(A.slice(0,A.length/2)), ...MS(A.slice(A.length/2))]
}

let arr = [1,2,3,4,5,6,7,8,9];
let a = arr.slice(0, arr.length/2);
let b = arr.slice(arr.length/2);
console.log(a);
console.log(b);

console.log(MS(arr));

function f(x){ return 1; } //questo, dovevo solo scrivere questo... ... ...

console.log(arr.map(f));