const express = require('express')
const mongo = require('mongoose')
const rutasProducto = require('./routes/productoRoutes')

const app = express()

app.use(express.json())

mongo.connect('mongodb://127.0.0.1:27017/MatiasAgustinCuenca')
  .then(() => console.log('🟢 MongoDB conectado!'))
  .catch(err => console.error('Error al conectar MongoDB:', err));

  app.use('/producto', rutasProducto)

  app.listen(3000, () => {
    console.log('Servidor OK');
});






