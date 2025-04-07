function memo(f){

    let cache = new Map();
    
    let g = function(x){
        if(cache.has(x)) return cache.get(x);
        else{
            let y= f(x);
            cache.set(x, y);
            return y;
        }
    }

    g.clear = () => {
        cache.clear();
    }

    g.size = () => cache.size;
    Object.defineProperty(g, "dimcache", {
        get(){
            return cache.size;
        }
    })

    return g;

}


/*

Si vuole implementare in JavaScript un modo per aggiungere una cache ad una generica funzione. Il funzionamento desiderato è il seguente: si consideri una funzione f(x), con un qualunque argomento x, che quando invocata restituisce un qualche valore y che dipende unicamente da x (in altre parole: è sempre vero che y=f(x)). Il calcolo di y può essere costoso, quindi si vuole evitare di ricalcolarlo nuovamente se già una volta è stato calcolato.



Si scriva una funzione memo(f) che restituisce una funzione g, tale che:

per ogni x, g(x) = f(x)
se g(x) è chiamata più volte con la stessa x, f(x) viene chiamata al più una volta (le altre volte g(x) restituisce il valore già calcolato una volta per f(x))
g.clear() azzera la cache, e ogni valore di f(x) memorizzato in precedenza viene dimenticato
g.size() restituisce il numero di valori memorizzati nella cache


Dettagli: Per determinare se una data x è stata già "vista" in precedenza, si adotti la semantica dell'operatore === del linguaggio (quindi: controllo di valore e tipo sui tipi base, e controllo di identità sui tipi riferimento), eventualmente con ragionevoli aggiustamenti per casi particolari (per esempio: NaN è trattato come un valore singolo, anche se ogni NaN può essere diverso da un altro; +0 e -0 sono trattati entrambi come lo stesso valore, anche se tecnicamente sono due valori diversi, ecc.). In una implementazione ragionevole, non dovrete preoccuparvi voi di questi casi: usate quello che JavaScript mette a disposizione!



Parte opzionale (punti extra): aggiungere una proprietà g.dimcache che consente di accedere in sola lettura al numero di valori memorizzati nella cache, come g.size().32

*/