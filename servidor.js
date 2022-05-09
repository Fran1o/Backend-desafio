const Contenedor = require('./contenedor')

const contenedor = new Contenedor('./productos.txt')
//contenedor.save({title: 'producto agregado 1', price: 350, thumbnail: 'img'})
//contenedor.save({title: 'producto agregado 2', price: 350, thumbnail: 'img'})
//contenedor.save({title: 'producto agregado 3', price: 350, thumbnail: 'img'})

const productos = contenedor.getAll2()

const express = require('express')
const app = express()

const PORT = 8080
app.listen(8080)

console.log(`Servidor http escuchando en el puerto ${PORT}`)

app.get('/productos', (req, res) =>{
    res.json(productos)
})


let rand = Math.floor(Math.random()*productos.length)
let productoRandom = productos[rand]

app.get('/productosRandom', (req,res) =>{
    res.send(productoRandom)
})



