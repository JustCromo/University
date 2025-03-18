class Studente{

    matricola=0;
    nome = "";
    carriera = [];

    //{materia: stringa, cfu: numero, voto: numero, lode: booleano}

    constructor(matricola, nome){
        this.nome = nome;
        this.matricola = matricola;
    }
    
    passato(esame){
        this.carriera.push(esame);
    }

    media(){
        let m = 0;
        let cfu_tot = 0;

        for(let i of this.carriera){
            cfu_tot += i.cfu;
        }

        for(let i of this.carriera){

            if(i.lode) m+=((i.voto+2) * i.cfu)/cfu_tot;
            else m+=(i.voto * i.cfu)/cfu_tot; 
            
        }

        return m;
    }

}