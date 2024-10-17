//agnostico: no estan atados a culaquier tecnología o lenguaje de programación 
    // Rutas:   Lo que el usuario obtendra cuando hace una petición al servidor
    // Cliente hace petición
    // Servidor da el recurso
//  El tamaño y orden si importa
//front-endpoint
//back-rutas/Recurso
//URL-ENDPOINT/INFORMACIÓN
const express = require('express') //usar Express  - COMMONJS

const app = express() // INICIALIZAR EXPRESS

// RUTA /
app.get('/', (req, res)=>{
    res.send("Hola")
})

// RUTA /franquicias
app.get('/franquias', (req, res)=>{
    res.send("Información de franquicias")
})

// RUTA /simple
app.get('/simple', (req, res)=>{
    res.send("Hamburguesa simple")
})

//ERROR 404
app.use((req, res) => {res.status(404).send("<h1>Page Not Found - 404</h1>")}) //midlework
app.listen(3000)
console.log("SERVER - ok")