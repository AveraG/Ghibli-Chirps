let express = require('express');
let chirpsRouter = require('./chirp');
let router = express.Router();

router.use('/chirps', chirpsRouter)

module.exports = router;