interface gen {
    priority: number;
}

function enqueue<T extends gen>(e:T,queue:T[]):void{
    for (let i: number = 0; i < queue.length; i++){
        if(e.priority <= queue[i].priority){
            queue.splice(i, 0, e);
            return 
        }
    }
    
    queue.push(e);
}

function dequeue<T>(queue:T[]):T|undefined{
    if (queue.length === 0) return undefined;
    return queue.pop();
}

/*

Si scrivano due funzioni generiche enqueue e dequeue per la gestione di code con priorità. In particolare:

enqueue(e, queue) inserisce un elemento e (di tipo generico T) in un array queue (di tipo T[]) ordinato per priorità crescente, dove la priorità è indicata in un campo priority presente in ogni elemento dell'array.
dequeue(queue) restituisce (e rimuove) l'elemento in coda all'array, ovvero quello con priorità maggiore, oppure undefined (se non ci sono elementi).


La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.

*/