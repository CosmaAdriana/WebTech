var http = require("http");

http.createServer(function (req, res) {
    res.write("Hello Web!"); 
    res.end();               
}).listen(8080);        

console.log("Serverul rulează la http://localhost:8080/");
