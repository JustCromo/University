class Libro {
    titolo;
    autore;
    numPagine;

    constructor(t, a, n){
        this.titolo = t;
        this.autore = a;
        this.numPagine = n;

    }

}

class Romanzo extends Libro{

    protagonista;

    constructor(titolo, autore, numPagine, p){
        super(titolo, autore, numPagine);
        this.protagonista = p;
    }
}

class Giallo extends Romanzo{

    colpevole;

    constructor(titolo, autore, numPagine, protagonista, colpevole){
        super(titolo, autore, numPagine, protagonista);
        this.colpevole = colpevole;
    }
}

class SaggioDivulgativo extends Libro{
    scienziato;
    constructor(titolo, autore, numPagine){
        super(titolo, autore, numPagine);
        this.scienziato = autore;
    }

    get getScienziato(){
        return this.autore;
    }

    set setScienziato(s){
        this.scienziato = s;
    }
}

function ilRomanzoCheVorrei(a){
    let min_pagine = +Infinity;
    let titolo = undefined;
    for(let i=0; i < a.length; i++){
        if(a[i] instanceof(Romanzo) && a[i].numPagine < min_pagine){
            min_pagine = a[i].numPagine;
            titolo = a[i].titolo;
        } 
    }

    return titolo;

    
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