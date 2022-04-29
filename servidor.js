const productos = [
    {id: 1, title: 'Escuadra', price: 232, thumbnail: 'img'},
    {id: 2, title: 'Calculadora', price: 232, thumbnail: 'img'},
    {id: 3, title: 'Globo Terraqueo', price: 232, thumbnail: 'img'}
]

const express = require('express')
const app = express()

const PORT = 8080
app.listen(8080)

console.log(`Servidor http escuchando en el puerto ${PORT}`)

app.get('/productos', (req,res) =>{
    res.send(productos)
    
})

let rand = Math.floor(Math.random()*productos.length)
let productoRandom = productos[rand]

app.get('/productosRandom', (req,res) =>{
    res.send(productoRandom)
})