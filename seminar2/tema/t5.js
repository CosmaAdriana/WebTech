const fibonacci = (n) => {
    if(n < 0 ) 
        return "Incorrect number";
    else if (n == 0)
        return 0;
    else if (n == 1)
        return 1;

let a = 0, b = 1, c;
for(let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
}
return b;
}
if(process.argv.length < 3) {
    console.log("not enaugh params");
}       
else{
    console.log(fibonacci(parseInt(process.argv[2])));
}