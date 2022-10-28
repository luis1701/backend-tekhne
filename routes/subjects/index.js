const router = require('express').Router();
const { createSubjectController, getSubjectController, getSubjectByIdController } = require('../../controllers/subjects')
const { validPostSubjectSchema } = require('../../middlewares/validSchemas')

// Crear recursos
router.post('/subjects', validPostSubjectSchema, createSubjectController);

router.get('/subjects', getSubjectController);
router.get('/subjects/:id', getSubjectByIdController);

module.exports = router;