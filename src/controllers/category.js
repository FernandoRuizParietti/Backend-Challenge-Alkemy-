const {Category} = require('../models/index')

function getAllCategory(req, res, next){
    return Category.findAll()
    .then((Category)=> res.send(Category))
    .catch((error)=> next(error))
    // res.send('soy la ruta de category')
}

function getCategoryById (req, res, next){
    const id = req.params.id
    return Category.findByPk(id)
    .then((Category)=> res.send(Category))
    .catch((error)=> next(error))
    //res.send('soy la ruta get por id de Category')
}

function postNewCategory (req, res, next){
    const category = req.body
    return Category.create({
        ...category,
        //id: uuidv4()
    })
    .then((Category)=> res.send(Category))
    .catch((error)=> next(error))
    //res.send('soy la ruta post de characters')
}

function updateCategory (req, res, next){
    const id = req.params.id;
    // console.log(id, 'id')
    const category = req.body;
    // console.log(category, 'category')
    return Category.update(category, {
        where: {
            id,
        },
    })
    .then((updatedCategory)=>{
        // console.log("updated")
        res.send(updatedCategory)
    })
    .catch((error)=> next(error))
    //res.send('soy la ruta put de characters')
}

function deleteCategory (req, res, next){
    const id = req.params.id
    return Category.destroy({
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
    getAllCategory,
    getCategoryById,
    postNewCategory,
    updateCategory,
    deleteCategory
}