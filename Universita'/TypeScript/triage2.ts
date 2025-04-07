enum Code{
    "White",
    "Green",
    "Yellow" = 5,
    "Red" = 10
};

enum Age{
    "Adult",
    "Elder",
    "Child",
    "Baby" = 5
};

type Urgency = [Code, Age];

function triage(arr:Urgency[]):void{
    arr.sort(sort_urge);
}

function sort_urge(a:Urgency,b:Urgency):number{

    if((a[0] + a[1]) == (b[0] + b[1])){
        if(a[0] >= b[0]) return 1;
        else return -1;
    }

    if((a[0] + a[1]) > (b[0] + b[1])) return 1;
    else return -1;

}