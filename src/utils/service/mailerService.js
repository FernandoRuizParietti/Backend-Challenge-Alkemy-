const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');

const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: 'zapapp.henry@gmail.com',
        pass: 'ohlostvkudkqisve'
    },
    tls: {
      rejectUnauthorized: false
    }
}))

const sendMail = async function (payload=''){
    console.log('email')
    
    //console.log("payloaddddd",payload, "doneee")
    let total = 0
    let id = uuidv4().slice(0,7)

    let nombreItems = []
    /// me guardo nombre unico de los objetos de la tienda, para solo renderizarlos una vez

    // if (payload.cart){
    //     payload.cart.forEach(item => {
    //         if (!nombreItems.includes(item.name)){
    //             nombreItems.push(item.name)
    //         }})
    
    //     payload.cart.forEach(item => {
    //         total = total+item.subtotal
    //         }
    //     )
    // }

    switch (payload.template){
        // case 'resetPassword':
        // await transporter.sendMail({
        //     from: 'Disney Store disney@disney.com',
        //     to: payload.email,
        //     subject: `Reset Password`,
        //     html: `Hi ${payload.name}! 
        //     <br> 
        //     If you request a password reset for your account please
        //     <a href=${payload.url}>click here</a>
        //     <br> 
        //     If you didn't please ignore this email
        //     `
        // }
        // )
        // break;
        case 'activateAccount':
        await transporter.sendMail({
            from: 'Disney Store disney@disney.com',
            to: payload.email,
            subject: `${payload.name} Active your account`,
            html: `Hi ${payload.name}!
            <a href=${payload.url}>click here to activate your account</a>
            <br>
            Have a nice day!
            `
        }
        )
        break
    // ----
        console.log('mensaje enviado')
    }

}

module.exports = {sendMail}