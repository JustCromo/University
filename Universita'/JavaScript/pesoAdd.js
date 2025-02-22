function pesoAdd(n){

    let count = 0;


    while(n%10 != n){
        let s = n.toString().split("");
        n = 0;
        for(let i=0;i<s.length;i++){
            n += parseInt(s[i]);
        }
        count++;
    }

    return count;
}


/*
Definiamo il peso additivo di un intero positivo n, il numero di volte che bisogna sostituire n con la somma delle sue cifre fino a che n non diventa un intero a singola cifra.



Si scriva una funzione pesoAdd(n), con n un intero positivo, che restituisce il peso additivo di n.



Esempio:

pesoAdd(1679583) -> 3

// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39

// 3 + 9 = 12

// 1 + 2 = 3

*/