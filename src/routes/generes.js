const {Router} = require('express');
const {Generes} = require('../models/index')
const generesController =require('../controllers/generes')


const router = Router()

router.get('/',generesController.getAll)

router.get('/:id',generesController.getById)

router.post('/',generesController.add)

router.put('/:id',generesController.update)

router.delete('/:id',generesController.delete)


module.exports = router;