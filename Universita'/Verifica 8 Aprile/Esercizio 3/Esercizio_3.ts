enum Dir {
    Nord = 0,
    Sud,
    Est,
    Ovest
}

interface Step{
    d:Dir,
    l:number
}

interface Point{
    coordinate: [number, number] // x | y
}

function walk(o:Point, p:Step[]):Point{

    for(let i of p){

        if(i.d == Dir.Nord) o.coordinate[1] += i.l;
        if(i.d == Dir.Sud) o.coordinate[1] -= i.l;
        if(i.d == Dir.Est) o.coordinate[0] += i.l;
        if(i.d == Dir.Ovest) o.coordinate[0] -= i.l;

    }

    return o;

}