class ModelCrud {
    constructor(model){
        this.model = model
    }
    getAll = (req, res, next) =>{
        return this.model.findAll()
        .then((results)=> res.send(results))
        .catch((error)=> next(error))
        // res.send('soy la ruta get  de characters')
    }
    
    getById = (req, res, next) => {
        const id = req.params.id
        return this.model.findByPk(id)
        .then((result)=> res.send(result))
        .catch((error)=> next(error))
        //res.send('soy la ruta get por id de characters')
    }
    
    add = (req, res, next) =>{
        const body = req.body
        return this.model.create({
            ...body,
            //id: uuidv4()
        })
        .then((createdElement)=> res.send(createdElement))
        .catch((error)=> next(error))
        //res.send('soy la ruta post de characters')
    }
    
    update = (req, res, next)=>{
        const id = req.params.id;
        // console.log(id, 'id')
        const body = req.body;
        // console.log(character, 'character')
        return this.model.update(body, {
            where: {
                id,
            },
        })
        .then((updatedElement)=>{
            // console.log("updated")
            res.send(updatedElement)
        })
        .catch((error)=> next(error))
        //res.send('soy la ruta put de characters')
    }
    
    delete = (req, res, next)=>{
        const id = req.params.id
        return this.model.destroy({
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
}

module.exports = ModelCrud;