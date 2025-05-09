function checkBST(tree){

    if(!tree) return true;

    let s = tree.sx === null || maxNode(tree.sx) < tree.val;

    let d = tree.dx === null || minNode(tree.dx) >= tree.val;

    if( s && d ){
        return checkBST(tree.sx) && checkBST(tree.dx) 
    } else return false;


}


function maxNode(tree) {
    if (tree === null){
        return - Infinity;
    }

    return Math.max(tree.val, Math.max(
        maxNode(tree.sx),
        maxNode(tree.dx)))
}

function minNode(tree) {
    if (tree === null){
        return Infinity;
    }

    return Math.min(tree.val, Math.min(
        minNode(tree.sx),
        minNode(tree.dx)))
}


/*
Scrivere una funzione checkBST(tree) che, dato un albero tree, ritorna true se è un albero binario di ricerca, false altrimenti. Si assuma che in caso di valore uguale, un elemento sia inserito nel sottoalbero di destra. Come visto a lezione, gli alberi sono codificati tramite un oggetto con proprietà: val per il valore, sx per il sottoalbero di sinistra, e dx per il sottoalbero di destra.



Un albero binario di ricerca (Binary Search Tree) ha le seguenti proprietà:



-Il sottoalbero sinistro di un nodo x contiene soltanto i nodi con chiavi minori della chiave del nodo x;

-Il sottoalbero destro di un nodo x contiene soltanto i nodi con chiavi maggiori della chiave del nodo x;

-Il sottoalbero destro e il sottoalbero sinistro devono essere entrambi due alberi binari di ricerca.



Nota: per calcolare il massimo, o il minimo di un sottoalbero potete usare le seguenti funzioni (da inserire nel codice da consegnare):



function maxNode(tree) {
    if (tree === null){
        return - Infinity;
    }

    return Math.max(tree.val, Math.max(
        maxNode(tree.sx),
        maxNode(tree.dx)))
}

function minNode(tree) {
    if (tree === null){
        return Infinity;
    }

    return Math.min(tree.val, Math.min(
        minNode(tree.sx),
        minNode(tree.dx)))
}

*/