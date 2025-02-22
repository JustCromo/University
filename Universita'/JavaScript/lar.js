function lar(T){

    let r=T.val;
    let l=T.val;

    if(T.sx) l = lar(T.sx)[0] + l;
    
    if(T.dx) r = lar(T.dx)[1] + r;
    
    return [l, r];

}

/*
Si scriva una funzione JavaScript lar(T) che, ricevuto come argomento un albero binario T strutturato come visto a lezione, e con valori di tipo stringa,
restituisca una coppia [l,r] in cui l è la stringa che si ottiene concatenando i valori di tutti i nodi, partendo dalla foglia raggiungibile dalla radice e scendendo sempre a sinistra finché è possibile,
e risalendo poi verso la radice mentre r è la analoga stringa ottenuta scendendo sempre a destra.

*/