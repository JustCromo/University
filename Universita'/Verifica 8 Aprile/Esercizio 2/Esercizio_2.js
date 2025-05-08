function ts(T,p,R){
    
    let pointer = T 
    let upto = ''
    let miss = p

    while (miss.length != 0){
        let c = miss.charAt(0)
        console.log (miss)
        if (pointer.figli[Number(c)-1]){
            if (miss.length == 1) return pointer.figli[Number(c)-1] = R
            pointer = pointer.figli[Number(c)-1]
        } else throw new NotFoundError("Path Impercorribile", T, upto, miss)
        upto = upto + c
        miss = miss.slice(1);
    }


}

class NotFoundError extends Error {
    tree;
    upto;
    miss;
    constructor (message,t,u,m){

        super(message);
        this.name = "NotFoundError";
        this.tree = t;
        this.upto = u;
        this.miss = m;

    }
}



var T=
{val: "A", figli:[
    {val: "B", figli:[
        {val:"C"},
        {val:"D",figli:[
            {val:"E"}
        ]},
        {val:"F"}
    ]},
    {val: "G", figli:[
        {val: "H", figli:[
            {val:"I"},
            {val:"J",figli:[
                {val:"K"}
            ]},
            {val:"L"},
            {val:"M",figli:[
                {val:"N"}
            ]},
        ]}
    ]},
    {val: "O", figli:[
        {val:"P"},
        {val:"Q",figli:[
            {val:"R"}
        ]}
    ]},
    {val: "S", figli:[
        {val:"T"},
        {val:"U",figli:[
            {val:"V"},
            {val:"W"}
        ]},
        {val:"X"},
        {val:"Y",figli:[
            {val:"Z"}
        ]}
    ]}
]}

    ts(T,"326",{val:true})