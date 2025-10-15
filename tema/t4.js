function intercalate(a,b){
    if(a.length !== b.length) 
        return -1;

    let rez = [];

    for(var i=0; i<a.length; i++){
        rez.push(a[i]);
        rez.push(b[i]);
    }

    return rez;
}

let x = ["a", "b"];
let y = [1, 2];

console.log(intercalate(x,y).join(","));