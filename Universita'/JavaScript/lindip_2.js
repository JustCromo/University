/*
Si scriva una funzione JavaScript lindip(A) che, dato un argomento A che è una matrice di numeri naturali positivi 
(garantita almeno 2x2), realizzata come un array di righe, ciascuna delle quali è un array di numeri, restituisca true 
se e solo se la matrice contiene almeno due righe linearmente dipendenti fra di loro.


Ricordate che due vettori X e Y (nel nostro caso, vettori-riga dentro A) sono linearmente dipendenti se 
esiste un numero k tale che X=kY.

*/



function lindip(A){
    
    for(let i=0; i < A.length; i++){
       
        for(let k=i+1; k < A.length; k++){

            let div = null;
            let flag = true;

            for(let j=0; j < A[i].length; j++){

                if(A[i][j] == 0 && A[k][j] == 0) continue;

                if(A[i][j] == 0 || A[k][j] == 0) break;

                if(div == null){
                    if(A[i][j]>=A[k][j]) div = A[i][j]/A[k][j];
                    else{
                        div = A[k][j]/A[i][j];
                        flag = false;
                    } 

                    if(!Number.isInteger(div)) break;
                }else{

                    if(flag){
                        if(div == A[i][j]/A[k][j]){
                            if(j == A[i].length -1) return true;
                        }
                        else{
                            break;
                        }
                    }else{
                        if(div == A[k][j]/A[i][j]){
                            if(j == A[i].length -1) return true;
                        }
                        else{
                            break;
                        }
                    }

                }



            }

        }
        
    }

    return false;

}