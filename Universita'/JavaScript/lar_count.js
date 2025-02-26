function lar(T){

    let l = 0;
    let r = 0;

    let Td = T;

    while(T){
        l++;
        T = T.sx;
    }

    while(Td){
        r++;
        Td = Td.dx;
    }

    return [l, r];

}