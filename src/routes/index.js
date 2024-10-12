const { Router } = require('express');
const router = Router();
const productoController = require('../controllers/productoController');
const personaController= require('../controllers/personaController')

// Rutas pública
router.get('/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "Funciona correctamente"
    };
    res.json(data);
});

// Rutas para personas
router.post('/crearPersona', personaController.crearPersona); 
router.get('/personas', personaController.listarPersonas); 
router.get('/listarpersonaid/:id', personaController.listarPersonaPorId); 
router.put('/editarpersona/:id', personaController.actualizarPersona); 
router.delete('/eliminarpersona/:id', personaController.eliminarPersona); 

module.exports = router;
