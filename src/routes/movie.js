const router = require('express').Router();
const movieCtrl = require('../controllers/Movie');

// Highlight all the endpoints here
router.get('/', movieCtrl.getAllMovies);
router.get('/id', movieCtrl.getMovie);
router.post('/id/comment', movieCtrl.postComment);
router.get('/id/comment/all', movieCtrl.getComments);

module.exports = router;
