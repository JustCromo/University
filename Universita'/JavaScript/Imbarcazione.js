class Imbarcazione{

    name = "";

    constructor(name){
        this.name = name
    }
}

class Nave extends Imbarcazione{

    porto_fab = "";

    constructor(name, porto_fab){
        super(name);
        this.porto_fab = porto_fab;
    }
}

class Barca extends Imbarcazione{

    length = 0;

    constructor(name, length) {
        super(name);
        this.length = length;
    }

    get metri(){ return this.length; }

    set metri(length) { this.length = length; }

}

class Motoscafo extends Barca{

    n_engine = 0;

    constructor(name, length, n_engine){
        super(name, length);
        this.n_engine = n_engine;
    }
}


function trovaBarca(arr){

    let max_l = -Infinity;
    let max_n = "";

    for(let i of arr){
        if(i instanceof Barca && i.metri > max_l){
            max_l = i.metri;
            max_n = i.name;
        }
    }

    if(max_n == "") return undefined;
    return max_n;
}



/*
Si definisca in JS una classe Imbarcazione che consenta di rappresentare imbarcazioni generiche, specificandone il nome (come unico campo della classe). 
Si estenda poi la classe Imbarcazione in modo da consentire la rappresentazione delle seguenti imbarcazioni:

Nave, che oltre al nome dell'imbarcazione indica il porto in cui è stata fabbricata;
Barca, che oltre al nome dell'imbarcazione indica la sua lunghezza in metri;
Motoscafo, un tipo speciale di Barca che indica anche il numero di motori che ha a disposizione.
La classe Barca deve consentire l'accesso al campo lunghezza anche mediante i getter/setter denominati metri.



Si definisca poi una funzione trovaBarca che, dato un array di imbarcazioni, restituisce il nome della barca la cui lunghezza (in metri) è la più grande tra quelle contenute nell'array. 
La funzione trovaBarca deve rispettare le seguenti condizioni:

Se non ci sono barche nell'array, restituisce undefined.
A parità di lunghezza, viene restituito il nome della barca incontrata per prima (ovvero quella avente indice minore nell'array).
*/