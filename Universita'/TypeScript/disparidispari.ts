function disparidispari(a:number[]):void{

    for(let i:number = a.length - 1; i >= 0; i--){
        if(i%2 == 1 && a[i]%2 == 1) a.splice(i,1);
    }

}