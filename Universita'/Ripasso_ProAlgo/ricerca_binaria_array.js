function ricBinaria(a, k){

    let pos = -1;
    let sin = -1;
    let des = a.length;

    while(sin <= des && pos == -1){

        cem = (sin + des)/2;
        if(k == a[cen]) pos = cen;
        else if(k < a[cen]) des = cen - 1;
        else sin = cen + 1;

    }   

    return pos;

}

// costo O(log n)

// oppure ricorsivamente

function ricBinRic(a, k, sx, dx){

    if ( sx > dx) return -1;

    cen = (sx + dx)/ 2;

    if(k == a[cen]) return cen;
    else if(k < a[cen]) return ricBinRic(a, k, sx, cen-1);
    else return ricBinRic(a, k, cen+1, dx);


}

// costo O(log n)