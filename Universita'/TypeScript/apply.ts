function apply(T:Tree, op:string, val:number):void{

    for(let i:number = 0; i< T.length; i++){

        if(Array.isArray(T[i])){

            apply(T[i] as Tree, op, val);

        }else if(typeof T[i] === 'number'){

            switch(op){

                case "+":
                    T[i] = T[i] as number + val;
                break;

                case "-":
                    T[i] = T[i] as number - val;
                break;

                case "*":
                    T[i] = T[i] as number * val;
                break;

                case "/":
                    T[i] = T[i] as number / val;
                break;

            }

        }
       
    }
}


type Tree = (number | Tree)[];


/*

Sia T come nell'esercizio precedente. Si scriva una funzione apply(T,op,val) che, ricevuto oltre a T un operatore op espresso come una stringa
(una fra "+", "-", "*", "/") e un valore numerico val, modifichi T applicando l'operazione "op val" ad ogni numero in T. Si può assumere che T contenga solo valori del tipo appropriato.



Come sempre, si curi di annotare il più precisamente possibile i tipi.

*/