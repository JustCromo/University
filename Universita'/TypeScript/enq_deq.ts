/*
Si scrivano due funzioni generiche enqueue e dequeue per la gestione di code con priorità. In particolare:

enqueue(e, queue) inserisce un elemento e (di tipo generico T) in un array queue (di tipo T[]) ordinato per priorità crescente, dove la priorità è indicata in un campo priority presente 
in ogni elemento dell'array.
dequeue(queue) restituisce (e rimuove) l'elemento in coda all'array, ovvero quello con priorità maggiore, oppure undefined (se non ci sono elementi).

La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.
*/

interface Prio{
    priority:number
}


function enqueue(e:Prio, queue:Prio[]):void{

    let flag = false;

    for(let i:number = 0; i < queue.length; i++){

        if(flag) break;

        if(e.priority <= queue[i].priority){

            queue.splice(i, 0, e);
            flag = true;

        }

    }

    if(!flag) queue.push(e);
}

function dequeue(queue:Prio[]):Prio | undefined{
    
    return queue.pop();

}