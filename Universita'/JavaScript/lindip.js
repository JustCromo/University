function lindip(A) {
    const numRows = A.length;
    const numCols = A[0].length;

    for (let i = 0; i < numRows - 1; i++) {
        for (let j = i + 1; j < numRows; j++) {
            let k = null;
            let linearlyDependent = true;

            for (let col = 0; col < numCols; col++) {
                if (A[j][col] !== 0) {
                    const currentK = A[i][col] / A[j][col];
                    if (k === null) {
                        k = currentK;
                    } else if (currentK !== k) {
                        linearlyDependent = false;
                        break;
                    }
                } else if (A[i][col] !== 0) {
                    linearlyDependent = false;
                    break;
                }
            }

            if (linearlyDependent) {
                return true;
            }
        }
    }

    return false;
}


/*

Si scriva una funzione JavaScript lindip(A) che, dato un argomento A che è una matrice di numeri naturali positivi (garantita almeno 2x2), realizzata come un array di righe, ciascuna delle quali è un array di numeri, restituisca true se e solo se la matrice contiene almeno due righe linearmente dipendenti fra di loro.



Ricordate che due vettori X e Y (nel nostro caso, vettori-riga dentro A) sono linearmente dipendenti se esiste un numero k tale che X=kY.

*/