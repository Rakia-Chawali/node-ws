var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello Node!!!!");
    res.end();
  })
  .listen(3000);
console.log("Server runningon http://localhost:3000  ");


