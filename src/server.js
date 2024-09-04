// 1. Importar las librerías necesarias
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// 2. Definición de variables 
const app = express()
const port = process.env.PORT

// 3. Middleware
app.use(express.json())

// 4. Routes 
const appRoutes = require('./routes/appRoutes')

// 5. Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Base de datos Conectada'))
.catch((error)=> console.log('Fallo la conexión a la base de datos', error))

// 6. Iniciación del servidor
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`))