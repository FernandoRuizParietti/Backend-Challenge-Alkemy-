const {Generes} = require('../models/index')

function getAllGeneres(req, res, next){
    return Generes.findAll()
    .then((Generes)=> res.send(Generes))
    .catch((error)=> next(error))
    // res.send('soy la ruta de category')
}

function getGeneresbyId (req, res, next){
    const id = req.params.id
    return Generes.findByPk(id)
    .then((Generes)=> res.send(Generes))
    .catch((error)=> next(error))
    //res.send('soy la ruta get por id de Category')
}

function postNewGenere(req, res, next){
    const generes = req.body
    return Generes.create({
        ...generes,
        //id: uuidv4()
    })
    .then((Generes)=> res.send(Generes))
    .catch((error)=> next(error))
    //res.send('soy la ruta post de characters')
}

function updateGenere (req, res, next){
    const id = req.params.id;
    // console.log(id, 'id')
    const generes = req.body;
    // console.log(generes, 'generes')
    return Generes.update(generes, {
        where: {
            id,
        },
    })
    .then((updatedGeneres)=>{
        // console.log("updated")
        res.send(updatedGeneres)
    })
    .catch((error)=> next(error))
    //res.send('soy la ruta put de characters')
}

function deleteGenere (req, res, next){
    const id = req.params.id
    return Generes.destroy({
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
    getAllGeneres,
    getGeneresbyId,
    postNewGenere,
    updateGenere,
    deleteGenere
}
