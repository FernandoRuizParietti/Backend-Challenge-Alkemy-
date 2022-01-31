const {Router} = require('express');
const {Generes} = require('../models/index')
const { getAllGeneres,
    getGeneresbyId,
    postNewGenere,
    updateGenere,
    deleteGenere}  = require('../controllers/generes')


const router = Router()

router.get('/',getAllGeneres)

router.get('/:id',getGeneresbyId)

router.post('/',postNewGenere)

router.put('/:id',updateGenere)

router.delete('/:id',deleteGenere)


module.exports = router;