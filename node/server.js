const http = require("http");

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Servidor Node.js corriendo dentro de un contenedor Docker");
});

servidor.listen(3000, () => {
    console.log("Org. Jorge Chicana");
    console.log("Servidor ejecutándose en puerto 3000");
});
