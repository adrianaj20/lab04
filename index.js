const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación, Najarro')
})

app.get('/clientes', (req, res) => {
  const clientes = ['Adrian', 'Mario', 'Cinthia']
  res.send(clientes)
})

app.get('/productos', (req, res) => {
  const productos = ['Laptop HP', 'Celular Samsung', 'Reloj Apple']
  res.send(productos)
})

app.listen(5000, () => {
  console.log('La aplicación está corriendo en el puerto 5000')
})
