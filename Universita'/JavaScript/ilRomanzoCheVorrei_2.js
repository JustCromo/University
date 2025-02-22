class Libro {
    titolo;
    autore;
    numPagine;

    constructor(t,a,n){
        this.titolo = t;
        this.autore = a;
        this.numPagine = n;
    }

}

class Romanzo extends Libro {
    protagonista;

    constructor (t,a,n,p){
        super(t,a,n);
        this.protagonista = p;
    }

}

class Giallo extends Romanzo {
    colpevole;

    constructor (t,a,n,p,c){
        super(t,a,n,p);
        this.colpevole = c;
    }

}

class SaggioDivulgativo extends Libro {
    
    constructor (t,a,n){
        super(t,a,n);
    }

    get scienziato(){
        return this.autore;
    }

    set scienziato(a){
        this.autore = a;
    }

}

function ilRomanzoCheVorrei(a){
    
    let min = Infinity
    let fav = undefined

    for (let l of a){
        if(l instanceof Romanzo) {  
            if (l.numPagine < min){
                min = l.numPagine;
                fav = l.titolo;
            }
        }
    }

    return fav

}

/*
Si consideri un sistema di gestione di libri, dove un generico libro è rappresentabile mediante la classe Libro, i cui campi sono titolo (stringa), autore (stringa) e numPagine (numero). Il sistema prevede la possibilità di definire tre tipi specifici di Libro, ovvero Romanzo, Giallo e SaggioDivulgativo:

La classe Romanzo rappresenta un libro avente un protagonista, indicato nel costruttore.
La classe Giallo rappresenta un romanzo con un dato colpevole, indicato nel costruttore.
La classe SaggioDivulgativo che rappresenta un libro, offrendo un getter-setter scienziato che corrisponde all'autore del saggio in questione.


Si implementino le classi JS Libro, Romanzo, Giallo e SaggioDivulgativo, organizzandole in modo da sfruttare al meglio l'ereditarietà. Si implementi inoltre una funzione ilRomanzoCheVorrei che, dato un array libri contenente oggetti della classe Libro, restituisce il titolo del romanzo più corto in termini di pagine. Si noti che:

A parità di lunghezza, ilRomanzoCheVorrei restituisce il primo romanzo incontrato.
Se non ci sono romanzi nell'array libri, restituisce undefined.


NB: Per semplicità, si assuma che un dato Libro abbia un solo autore.

*/