// 1. Importar el modelo y las librerías necesarias
let technology = require('../models/learned_technology_model')
const multer = require('multer')
const fs = require('fs')

// 2. Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage()
const upload = multer({storage:storage})


// 3. Creación del controlador para el manejo del modelo
exports.create_technology = [
    upload.single('icon'),

    async(request, response)=>{
        try{
            const base_64_image = request.file.buffer.toString('base64')

            const new_technology = new technology({
                name:request.body.name,
                icon:base_64_image
            })
            
            await new_technology.save()
            response.status(201).json(new_technology)
        } catch(error){
            response.status(500).json({
                error:error.message
            })
        }
    }
]