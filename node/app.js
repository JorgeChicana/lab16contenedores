const express = require("express");
const app = express();

// Org.Jorge Chicana
app.get("/", (req, res) => {
    res.send("Hola desde Node.js dentro de un contenedor Docker");
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});
