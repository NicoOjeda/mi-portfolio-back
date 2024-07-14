let router = require('express').Router()

let comment = require('./comment')

router.use('/comment', comment)

module.exports = router;
