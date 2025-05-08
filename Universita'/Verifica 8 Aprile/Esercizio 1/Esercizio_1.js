function cugini(n){

    let a = n;
    let b = n;
    
    function isGrazioso(n){

        let s = ''
        let m = n
        while(m!=0){
            s = m%10 + s;
            m = Math.trunc(m/10)
        }
    
        let nn = Number(s.split('').sort().join(''));
        console.log(nn)
        return n%nn==0
        
    }

    while(!isGrazioso(a))
        a--
    while(!isGrazioso(b))
        b++

    return [a,b]

}
