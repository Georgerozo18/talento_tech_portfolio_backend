// 1. Importar elementos necesarios
const express = require('express')
const router = express.Router()

// 2. Definición de las rutas
router.get('/', (request, response)=>{
    response.send('Hello George')
})

// 3. Exportar el router para ser utilizado en otros archivos
module.exports = router