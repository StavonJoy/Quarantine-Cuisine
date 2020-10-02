const Restaurant = require('../models/restaurant')

module.exports = { addReview }

function addReview(req, res) {
    const onlyReviewInfo = { ...req.body }
    delete onlyReviewInfo.restaurantInfo
    Restaurant.findOne({ location_id: req.body.restaurantInfo.location_id }, (err, restaurant) => {
        if (restaurant) {
            restaurant.safetyReviews.push(onlyReviewInfo)
            restaurant.save()
            .then(moreReviewsRest => res.status(200).json({ restaurant: moreReviewsRest }))
        }
        else {
            Restaurant.create({ ...req.body.restaurantInfo }, (err, newRest) => {
                newRest.safetyReviews.push(onlyReviewInfo)
                newRest.save()
                .then(savedRest => res.status(200).json({ restaurant: savedRest }))
            })
        }
    })
}