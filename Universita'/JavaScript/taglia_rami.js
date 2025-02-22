function taglia_rami(t){

    if(!t.figli) return t.val;

    let somma = 0;

    for(let i=0; i<t.figli.length;i++){

        let temp = taglia_rami(t.figli[i]);
        
        if(temp < 0){
            t.figli.splice(i, 1);
            i--;
            temp = 0;
        }

        somma += temp;
    }

    somma += t.val;

    return somma;

}



/*

Si scriva una funzione taglia_rami(t) che prende in input un albero k-ario 
. L'albero ha la rappresentazione vista a lezione, che utilizza:

un array per i figli di ogni nodo (chiave t.figli);
etichette di nodo numeriche (chiave t.val).


La funzione modifica l'albero eliminando tutti i sottoalberi in cui la somma delle etichette dei nodi è negativa: i nodi tagliati non devono contribuire alla somma del sottoalbero padre. Ad esempio se un nodo t
 ha due sottoalberi figli entrambi con somma delle etichette negativa, allora la somma del sottoalbero radicato in t
 conterrà solo t.val
. La funzione deve modificare l'albero originale (NON una sua copia).



Si può assumere che la radice dell'albero non venga mai cancellata


*/