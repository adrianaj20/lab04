const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación')
})

app.get('/clientes', (req, res) => {
  const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3']
  res.send(clientes)
})

app.get('/productos', (req, res) => {
  const productos = ['Producto 1', 'Producto 2', 'Producto 3']
  res.send(productos)
})

app.listen(5000, () => {
  console.log('La aplicación está corriendo en el puerto 5000')
})
