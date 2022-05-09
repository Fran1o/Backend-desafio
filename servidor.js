const Contenedor = require('./contenedor')

const contenedor = new Contenedor('./productos.txt')
contenedor.save({title: 'producto agregado', price: 350, thumbnail: 'img'})

const productos = contenedor.getAll2()
console.log('productos:', productos)

const express = require('express')
const app = express()

const PORT = 8080
app.listen(8080)

console.log(`Servidor http escuchando en el puerto ${PORT}`)

app.get('/productos', (req, res) =>{
    res.send(productos)
})


let rand = Math.floor(Math.random()*productos.length)
let productoRandom = productos[rand]

app.get('/productosRandom', (req,res) =>{
    res.send(productoRandom)
})



