function mkIntr(T){

    let flag = false;

    for(let i = 0; i< T.length; i++){

        if(Array.isArray(T[i])){
            flag = mkIntr(T[i]) || flag;
        }
        else if(typeof T[i] !== 'number'){
            throw new TypeError("C'e' una foglia che non e' un numero");
        }else if(T[i]%1 != 0){

            let resto = T[i]%1;
            if(resto > 0.5) T[i] = (T[i] - resto) + 1;
            else T[i] = T[i] - resto;

            flag = true;
        }


    }



    return flag;
}


/*

Si consideri un albero T, realizzato tramite array come visto a lezione. Si scriva una funzione JavaScript mkIntr(T) che visiti tutte le foglie dell'albero, e:

1) se la foglia è un numero intero, lo lascia inalterato

2) se la foglia è un numero, ma non è intero, lo approssima all'intero più vicino

3) se la foglia non è un numero, lancia un'eccezione di tipo TypeError con un opportuno messaggio.

La funzione restituisce true se l'albero è stato modificato, false altrimenti.


*/