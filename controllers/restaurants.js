const Restaurant = require('../models/restaurant')

module.exports = { addReview }

function addReview(req, res) {
    Restaurant.findOne({ _id: req.params.restaurantId }, (err, restaurant) => {
        restaurant.safetyReviews.push(req.body)
        restaurant.save()
        .then(res => res.status(201).json({ restaurant }))
    })
}