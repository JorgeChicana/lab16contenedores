const express = require("express");
const app = express();

// Org.Jorge Chicana
app.get("/", (req, res) => {    
    res.send(`
        Hola Jorge Chicana Aspajo, desde Node.js dentro de un contenedor Docker.
        Otra línea más desde tu servidor :)
        Una línea nueva que acabo de agregar correctamente.
        `);
});


// Render (y cualquier servicio en la nube) asigna un puerto dinámico.
// Ese puerto llega a tu aplicación mediante process.env.PORT
// Si no existe (ejecución local), usa 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Express debe escuchar en 0.0.0.0 para que Render (o Docker)
// pueda exponer el servidor hacia afuera.
// Si solo listens en "localhost", Render NO podría acceder.
app.listen(PORT, "0.0.0.0", () => {
    console.log("Servidor ejecutándose en puerto " + PORT);
});



