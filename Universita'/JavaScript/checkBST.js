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

function checkBST(T){

   if(!T) return true;

   if( (T.sx) && (maxNode(T.sx) <= T.val) && (T.dx) && (minNode(T.dx) > T.val) ) return checkBST(T.sx) && checkBST(T.dx);
       
   else if( (!T.sx) && (T.dx) && (minNode(T.dx) > T.val)) return checkBST(T.dx);
   
    else if ( (!T.dx) && (T.sx) && (maxNode(T.sx) <= T.val)) return checkBST(T.sx);

    else if ( (!T.dx) && (!T.sx)) return true;

    else return false;


}


/*
Scrivere una funzione checkBST(tree) che, dato un albero tree, ritorna true se è un albero binario di ricerca, false altrimenti. Si assuma che in caso di valore uguale, un elemento sia inserito nel sottoalbero di sinistra. Come visto a lezione, gli alberi sono codificati tramite un oggetto con proprietà: val per il valore, sx per il sottoalbero di sinistra, e dx per il sottoalbero di destra.



﻿Un albero binario di ricerca (Binary Search Tree) ha le seguenti proprietà:



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