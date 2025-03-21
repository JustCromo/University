interface List {
    val: Point
    next: List | null
};

type Point = [
    x:number,
    y:number
];

function filter(l:List|null, p:(n:Point) => boolean):Point[]{

    let arr: Point[] = [];

    if(l === null) return arr;

    if(p(l.val)) arr.push(l.val);

    arr = arr.concat(filter(l.next, p));

    return arr;
}

function sortedFilter(l:List|null, p:(n:Point) => boolean):Point[]{

    let arr:Point[] = filter(l, p);

    return arr.sort(ord_filter);
}

function ord_filter(n: Point, m: Point): number {

    if (n[0] === m[0]) return n[1] - m[1];

    return n[0] - m[0];
}


/*
Si consideri l'interfaccia List definita come segue:

interface List {

val: Point

next: List | null

}

dove il tipo Point rappresenta un punto nel piano cartesiano e deve essere definito come coppia di numeri. 
Ad esempio, la coppia [-2,3] sarà usata per rappresenta il punto la cui coordinata x è -2 e la cui coordinata y è 4.



Si implementi in TypeScript la funzione filter definita come segue: Dati in input una lista l e un predicato p, 
filter restituisce un array contenente tutti i Point in l che soddisfano il predicato p, nello stesso ordine in cui 
appaiono nella lista originale. L'array DEVE essere calcolato RICORSIVAMENTE affinchè l'esercizio sia valutato positivamente.



Si implementi, inoltre, una funzione sortedFilter che calcoli lo stesso array di filter, restituendolo però ordinato per coordinate crescenti (ovvero mettendo prima i punti con coordinate x minori e, a parità di x, quelli con coordinate y minori).


*/