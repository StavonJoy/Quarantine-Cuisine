const router = require('express').Router()
const restaurantsCtrl = require('../controllers/restaurants')

router.post('/', restaurantsCtrl.addReview)

module.exports = router