const {Character} = require('../models/index')

function getAllCaracters(req, res, next){
    return Character.findAll()
    .then((Character)=> res.send(Character))
    .catch((error)=> next(error))
    // res.send('soy la ruta get  de characters')
}

function getCharacterbyId(req, res, next){
    const id = req.params.id
    return Character.findByPk(id)
    .then((Character)=> res.send(Character))
    .catch((error)=> next(error))
    //res.send('soy la ruta get por id de characters')
}

function postNewCharacter(req, res, next){
    const character = req.body
    return Character.create({
        ...character,
        //id: uuidv4()
    })
    .then((Character)=> res.send(Character))
    .catch((error)=> next(error))
    //res.send('soy la ruta post de characters')
}

function updateCharacter (req, res, next){
    const id = req.params.id;
    // console.log(id, 'id')
    const character = req.body;
    // console.log(character, 'character')
    return Character.update(character, {
        where: {
            id,
        },
    })
    .then((updatedCharacter)=>{
        // console.log("updated")
        res.send(updatedCharacter)
    })
    .catch((error)=> next(error))
    //res.send('soy la ruta put de characters')
}

function deleteCharacter (req, res, next){
    const id = req.params.id
    return Character.destroy({
        where: {
            id,
        },
    })
    .then(()=>{
        console.log("deleted")
        res.sendStatus(200)
    })
    .catch((error)=> next(error))
    //res.send('soy la ruta delete de characters')
}


module.exports = {
    getAllCaracters,
    getCharacterbyId,
    postNewCharacter,
    updateCharacter,
    deleteCharacter
}