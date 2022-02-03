const {Router} = require('express');

const CharactersRoutes = require('./characters');
const GeneresRoutes = require('./generes');
const CategoryRoutes = require('./category');
const UserRoutes = require('./users')
const LoginRoutes = require('./login')


const router = Router()

router.use('/characters', CharactersRoutes)//http://localhost:3001/api/characters
router.use('/generes', GeneresRoutes)//http://localhost:3001/api/generes
router.use('/category', CategoryRoutes)//http://localhost:3001/api/category
router.use('/users', UserRoutes)//http://localhost:3001/api/users
router.use('/auth/login', LoginRoutes) // http://localhost:3001/api/auth/login


module.exports = router;