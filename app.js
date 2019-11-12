const http = require ("http")

http.createServer(function (req,res){

    res.writeHead(200,{"content-type": "text/plain" } )

   

    res.end("Inicio pagina peliculas")

}).listen(3030,"localhost")