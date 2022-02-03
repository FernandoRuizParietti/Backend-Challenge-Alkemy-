const {sendMail} = require('../utils/service/mailerService')

const sendOrderDetails = async function ( req,res){
    const {name, email, adress} = req.body
    try {
        await sendMail({payload:{name,email,adress}})
        res.json('mail mandado con exito')
    }
    catch (error){
        res.status(404).json(error)
    }
}

module.exports = {sendOrderDetails}