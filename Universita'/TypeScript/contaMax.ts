/*
Si consideri una struttura dati ad albero binario, i cui nodi sono oggetti con quattro proprietà: sx e dx, 
che riferiscono rispettivamente al figlio sinistro e al figlio destro del nodo stesso; val e grande, due valori interi. Le proprietà sx e dx sono opzionali.


Si scriva in TS una funzione contaMax(T) che, dato un albero binario T come argomento, 
calcoli per ogni nodo t in T (inclusa la radice) il massimo dei val memorizzati nel sotto-albero di cui t è radice (t incluso). 
Questo massimo deve essere scritto in grande. La funzione restituisce il valore grande della radice di T.


Nota: Si assuma che il valore di grande in ogni nodo in T sia inizialmente -infinito.
*/

interface Nodo {
    sx?:Nodo,
    dx?:Nodo,
    val:number,
    grande:number
};

function contaMax(T:Nodo):number{

    if(!T) return -Infinity;

    T.grande = T.val;

    if(T.sx) T.grande = Math.max(T.grande, contaMax(T.sx));

    if(T.dx) T.grande = Math.max(T.grande, contaMax(T.dx));

    return T.grande;
}