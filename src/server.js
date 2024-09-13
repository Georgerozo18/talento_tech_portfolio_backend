// 1. Importar las librerías necesarias
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// 2. Definición de variables 
const app = express()
const port = process.env.PORT

// 3. Middleware
app.use(express.json())

// 4. Routes 
const appRoutes = require('./routes/app_routes')
app.use('/api/v1', appRoutes)

// 5. Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Database connected!'))
.catch((error)=> console.log('Connection to the database failed', error))

// 6. Configuración del motor de vistas
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// 7. Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname,'../public/')))

// 8. Iniciación del servidor
app.listen(port, ()=> console.log(`Server running on port ${port}`))