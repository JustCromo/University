class Studente{

    #nome;
    #crediti = 0;

    static #studentiTotali = 0;
    static #creditiTotali = 0;

    constructor(nome){

        this.#nome = nome;

        Studente.#studentiTotali++;

    }

    aggiungiCFU(crediti){

        this.#crediti = crediti;

        Studente.#creditiTotali += crediti;

    }

    getInfo(){
        return{
            nome: this.#nome,
            cfu: this.#crediti
        }
    }

    static getStatistiche(){
        return{
            studenti: Studente.#studentiTotali,
            cfu: Studente.#creditiTotali
        }
    }


}