
const router = require('express').Router()
const movieRoute = require('./movie');

router.use('/movie', movieRoute);
router.get('/test', (req, res) => res.send('Yeah it works!'));

module.exports = router
