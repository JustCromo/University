type cbool = true | false | 1 | 0;

function setaccio<T>(a: T[], f:(b: T) => cbool ){

    let obj: { yes:T[]; no:T[]} = { yes:[] , no:[]};

    for(let i: number = 0; i<a.length; i++){
        if( f(a[i]) === true || f(a[i]) === 1){
            obj.yes.push(a[i]);
        }else obj.no.push(a[i])
    }    

    return obj;
}


/* 

Si scriva in TypeScript una funzione setaccio(a,f) che, preso un array omogeneo a di un qualche tipo, e una funzione f che dato un valore del tipo degli elementi di a restituisca un valore di tipo "cbool", restituisca un oggetto con due proprietà: una di nome "yes" il cui valore è un array degli elementi di a che soddisfano f, e una di nome "no" il cui valore è un array degli elementi di a che non soddisfano f, ciascuno nello stesso ordine in cui gli elementi comparivano in a.

Il tipo cbool include (solo) i valori true e 1 che vengono interpretati come "soddisfatto", e false e 0 che vengono interpretati come "non soddisfatto". NOTA: dovrete dichiarare il tipo cbool nel vostro codice (con esattamente questo nome).



Abbiate cura di annotare il più precisamente possibile i tipi di tutte le dichiarazioni.

*/