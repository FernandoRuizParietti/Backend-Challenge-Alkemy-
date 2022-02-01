const {Router} = require('express');
const {Category} = require('../models/index')
const categoryController =require('../controllers/category')


const router = Router()

router.get('/',categoryController.getAll)

router.get('/:id',categoryController.getById)

router.post('/',categoryController.add)

router.put('/:id',categoryController.update)

router.delete('/:id',categoryController.delete)


    module.exports = router;