const axios = require('axios')
const {Character, Category } = require('../models/index')
const ModelCrud = require('./index')

class CharacterModel extends ModelCrud{
    constructor(model){
        super(model)
    }
    getAll = (req, res, next) =>{
        const mycharacter = this.model
        .findAll({
            include: {
                model : Category,
            }
        })
        Promise.all([mycharacter])
        .then((results)=> {
            const [mycharacterResult] = results 
            res.send(mycharacterResult)})
        .catch((error)=> next(error))
        // res.send('soy la ruta get  de characters')
    }
    addCategoryToCharacter = (req, res, next)=>{
            const {characterId, categoryId} = req.params
            this.model.findByPk(characterId)
            .then((character) =>{
               return character.addCategory(categoryId)
            })
            .then(()=>{res.sendStatus(200)})
            .catch((error)=> next(error))
    }
}


const characterController = new CharacterModel(Character)


module.exports = characterController