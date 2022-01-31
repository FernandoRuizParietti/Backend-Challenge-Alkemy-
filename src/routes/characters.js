const {Router} = require('express');
//const { v4: uuiddv4 } = require('uuid')
const {Character} = require('../models/index')
const {getAllCaracters,
    getCharacterbyId,
    postNewCharacter,
    updateCharacter,
    deleteCharacter} =require('../controllers/chracters')


const router = Router()

router.get('/',getAllCaracters)

router.get('/:id',getCharacterbyId)

router.post('/',postNewCharacter)

router.put('/:id',updateCharacter)

router.delete('/:id',deleteCharacter)



module.exports = router;