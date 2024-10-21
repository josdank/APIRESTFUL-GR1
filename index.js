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
app.use(express.json()) // JSON

// // RUTA /
// app.get('/', (req, res)=>{
//     res.send("Hola")
// })

// // RUTA /franquicias
// app.get('/franquias', (req, res)=>{
//     res.send("Información de franquicias")
// })

// // RUTA /simple
// app.get('/simple', (req, res)=>{
//     res.send("Hamburguesa simple")
// })

// // RUTA / register
// app.post('/register', (req, res)=>{
//     const {email, password} = req.body
//     email === "josue@gmail.com" ? res.send("User Register") :res.send("Bad Credentials") 
//     console.log(req.body)
// })

// //RUTA / products/1
// app.get('/products/:id',(req, res)=>{
//     console.log(req.params)
//     const {id} =req.params
//     console.log(typeof (id)); //para ver el valor del dato
//     const products =[
//         {
//             id:56,
//             title :"Laptop",
//             price:500
//         },
//         {
//             id:77,
//             title :"Play 5",
//             price:800
//         },
//     ]
//     const response = products.find((product)=>product.id === +id) //variable, metodo find, comparación extricta 
//     response ? res.send (response): res.send ("Product not found") //Operador ternario 
// })

// // RUTA /search
// app.get('/search',(req, res)=>{
//     console.log(req.query)
//     const {orden} = req.query
//     const responses ={
//         pollo:"Pollo del Hornero",
//         milanesa:"Milanesa de pollo"
//     }
//     const response = responses[orden] || "No exsite" // responses[orden] accede a la propiedad del objeto
//     res.send(response)
// })

// // RUTA /                   - TEXTO
// app.get('/', (req, res)=>{
//     res.send("Response Landig page de BIENVENIDA")
// })

// // RUTA / dashboard          - JSON
// app.get('/dashboard', (req, res)=>{
//     const user = {
//         name:"Josue",
//         rol: "Admin"
//     }
//     res.json(user)
// })

// //RUTA /profile              - IMAGEN
// app.get('/user/profile', (req, res)=>{
//     res.sendFile('./car.jpg',{
//         root:__dirname
//     })
// })

// //RUTA /profile              - Archivo
// app.get('/user/profile1', (req, res)=>{
//     res.sendFile('./LABORATORIO.pdf',{
//         root:__dirname
//     })
// })

// //RUTA /404             
// app.get('/mouse', (req, res)=>{
//     res.send(
//         `<h1> Page not Found - 404 </h1>
//         <button> Back to home Page</button>`
//     )
// })

// MIDLEWARE Siempre en medio del request y del response
app.use((req, res, next) => {
    const {token} = req.body;
    const response = token==="123" ? true:false
    response ? next() : res.status(401).json({msg:"Invalid Token"})
})

//RUTAS 
app.get("/gifts",(req, res)=>{
    res.send("Lista de Gifs")
})

//ERROR 404
app.use((req, res) => {res.status(404).send("<h1>Page Not Found - 404</h1>")}) //midlework
app.listen(3000)
console.log("SERVER - ok")