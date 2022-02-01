const {Router} = require('express');
//const { v4: uuiddv4 } = require('uuid')
const {Character} = require('../models/index')
const characterController =require('../controllers/chracters')


const router = Router()

router.get('/',characterController.getAll)

router.get('/:id',characterController.getById)

router.post('/',characterController.add)

router.post('/:characterId/category/:categoryId',characterController.addCategoryToCharacter)

router.put('/:id',characterController.update)

router.delete('/:id',characterController.delete)



module.exports = router;