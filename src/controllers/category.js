const {Category , Generes} = require('../models/index')
const ModelCrud = require('./index')

class CategoryModel extends ModelCrud{
    constructor(model){
        super(model)
    }
    getAll = (req, res, next) =>{
        const mycategory = this.model
        .findAll({
            include: {
                model : Generes,
            }
        })
        Promise.all([mycategory])
        .then((results)=> {
            const [mycategoryResult] = results 
            res.send(mycategoryResult)})
        .catch((error)=> next(error))
       
    }
}


const categoryController = new CategoryModel(Category)



module.exports = categoryController