const express = require('express');
const morgan = require('morgan');
const {conn} = require('./src/models/index');
const {PORT} =  require('./src/utils/config/index');
const routes = require('./src/routes/index')
const errorHandler = require('./src/utils/middlewares/errorHandler')
const setHeaders = require('./src/utils/middlewares/setHeaders')

const app = express()

//seteo todos mis headers
 
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
// app.use(cookieParser());
app.use(morgan('dev'));
app.use(setHeaders)
app.use(errorHandler)


//seteo mis rutas

app.use('/api', routes);


conn.sync({force: true})
.then(()=>{
    
    //server.listen
    console.log('Base de datos conectada')
    app.listen(PORT, ()=>{
        console.log(`server listen in port ${PORT}`)
    })
})
