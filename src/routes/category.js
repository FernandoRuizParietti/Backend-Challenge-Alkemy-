const {Router} = require('express');
const {Category} = require('../models/index')
const {
    getAllCategory,
    getCategoryById,
    postNewCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category')


const router = Router()

router.get('/',getAllCategory)

router.get('/:id',getCategoryById)

router.post('/',postNewCategory)

router.put('/:id',updateCategory)

router.delete('/:id',deleteCategory)


    module.exports = router;