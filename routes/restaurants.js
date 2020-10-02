const router = require('express').Router()
const restaurantsCtrl = require('../controllers/restaurants')

router.post('/:restaurantId/reviews', restaurantsCtrl.addReview)

module.exports = router