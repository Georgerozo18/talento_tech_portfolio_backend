// 1. Importar elementos necesarios
const express = require('express')
const router = express.Router()

// 2. Importar los controladores
const technology_controller = require('../controllers/learned_technology_controller')

// 3. Definición de las rutas
router.get('/', (request, response)=>{
    response.render('index')
})

// Technology routes
router.post('/technology', technology_controller.create_technology) //private
router.get('/technology', technology_controller.read_all_technologies) //public
router.get('/technology/:id', technology_controller.read_technology_by_id) //private
router.put('/technology/:id', technology_controller.update_technology_by_id) //private
router.delete('/technology/:id', technology_controller.delete_technology_by_id) //private

// 4. Exportar el router para ser utilizado en otros archivos
module.exports = router