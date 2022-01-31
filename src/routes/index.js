const {Router} = require('express');

const CharactersRoutes = require('./characters');
const GeneresRoutes = require('./generes');
const CategoryRoutes = require('./category');


const router = Router()

router.use('/characters', CharactersRoutes)
router.use('/generes', GeneresRoutes)
router.use('/category', CategoryRoutes)


module.exports = router;