let router = require('express').Router()
let {create} = require('../controllers/comment')

router.route('/create').post(create)

module.exports = router