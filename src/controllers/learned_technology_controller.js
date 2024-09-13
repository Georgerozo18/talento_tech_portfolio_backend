// 1. Importar el modelo y las librerías necesarias
let technology = require('../models/learned_technology_model')
const multer = require('multer')
const path = require('path')

// 2. Configuración de multer para manejar la carga de archivos
const storage = multer.diskStorage({
    destination: (request, file, callback)=>{
        callback(null, path.join(__dirname, '../../public/uploads/'))
    }, 
    filename: (request, file, callback)=>{
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random()* 1E9)
        callback(null, uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})

// 3. Creación de un elemento
exports.create_technology = [
    upload.single('icon'),

    async(request, response)=>{
        try{
            const new_technology = new technology({
                name:request.body.name,
                icon:`/uploads/${request.file.filename}`
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

// 4. Obtener todos los elementos
exports.read_all_technologies = async(request, response)=>{
    try{
        const technology_items = await technology.find()
        response.json({
            items:technology_items
        })
    }catch(error){
        response.status(500).json({
            error:error.message
        })
    }
}

// 4.1 Obtener un elemento por su ID
exports.read_technology_by_id = async(request, response)=>{
    try{
        const technology_item = await technology.findById(request.params.id)

        if(!technology_item) return response.status(404).json({
            message:'Item not found'
        })

        response.json(technology_item)
    }catch(error){
        response.status(500).json({
            error:error.message
        })
    }
}

// 5. Actualizar un elemento por su ID
exports.update_technology_by_id =[
    upload.single('icon'),

    async(request, response)=>{
        try{
            const technology_item = await technology.findByIdAndUpdate(request.params.id)
            
            if(!technology_item) return response.status(404).json({
                message:'Item not found'
            })

            if(request.file){
                request.body.icon = `/uploads/${request.file.filename}`
            }

            Object.assign(technology_item, request.body)
            const update_technology = await technology_item.save()
            
            response.json(update_technology)
        }catch(error){
            response.status(500).json({
                error:error.message
            })
        }
    }
]

// 6. Eliminar un elemento por su ID
exports.delete_technology_by_id = async(request, response)=>{
    try{
        const technology_item = await technology.findByIdAndDelete(request.params.id)

        if(!technology_item) return response.status(404).json({
            message:'Item not found'
        })

        response.json({
            message:'Item deleted successfully'
        })
    } catch(error){
        response.status(500).json({
            error:error.message
        })
    }
}