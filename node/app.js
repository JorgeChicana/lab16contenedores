const express = require("express");
const app = express();

// Org.Jorge Chicana
app.get("/", (req, res) => {
    res.send("Hola desde Node.js dentro de un contenedor Docker");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor ejecutándose en puerto " + PORT);
});

