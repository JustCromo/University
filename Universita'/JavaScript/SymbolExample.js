
const iteratoreOriginale = Array.prototype[Symbol.iterator];

Array.prototype[Symbol.iterator] = function*(){

    for(let i = this.length-1; i >= 0; i--) yield this[i];

}

const nums = [1,2,3,4];

for(let n of nums) console.log(n);

console.log("---------");

Array.prototype[Symbol.iterator] = iteratoreOriginale;

for(let n of nums) console.log(n);