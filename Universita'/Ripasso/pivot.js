function pivot(a, n){

    let max = -Infinity;

    for(let i of a){
        if (i > max) {
            max = i
        }
    }

    let left = a.length - 1;
    let right = 0;

    if(n == 0) return [];

    while(true){

        let second_max = -Infinity;
        let index = 0

        for(let i=0; i<a.length; i++){
            if(a[i] > second_max && a[i] < max){
                second_max = a[i];
                index = i;
            }
        }
        max = second_max;
        left--;
        right++;

        if(left - right <= 1) {
            let i = 0

            for(let j = 0; j < a.length; j ++){

                if(a[j] < max){
                    a.unshift(a.splice(i, 1)[0]);
                    i<index?true:(i--,index++);
                    j=i;
                    i++;
                    continue;
                } 

                if(a[j] > max){
                    i>index?true:(a.push(a.splice(i, 1)[0]),i--,index--);
                    j=i;
                    i++;
                    continue;
                }

                if(a[j] == max){
                    index = i;
                    i++;
                    continue;

                }

            }

            let left_a = [];
            let right_a = [];

            for(let i=0; i < a.length; i++){

                if(i < index) left_a.push(a[i]);
                else right_a.push(a[i]);

            }

            let left_r = pivot(left_a, n-1);
            let right_r = pivot(right_a, n-1);

            return [a[index]].concat(left_r, right_r);

        }   

    }

    

}

let arr = [5,7,10,6,12,1,15,4];
let n = 3;

console.log(pivot(arr, n));
