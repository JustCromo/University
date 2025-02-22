let a = 'abcde';
let b = 'cde';

function solution(a, b){

    let result = true;

    a = a.split('');
    b = b.split('');

    if(a[a.length-1] != b[b.length-1]) return false;
    

    return result;
}

console.log(solution(a,b));