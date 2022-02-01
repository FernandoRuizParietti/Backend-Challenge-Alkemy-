const {Generes} = require('../models/index')

const ModelCrud = require('./index')

const generesController = new ModelCrud(Generes)


module.exports = generesController
