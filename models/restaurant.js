const mongoose = require('mongoose')
const Schema = mongoose.Schema

const safetyReviewSchema = new Schema({
    outdoorSeating: Boolean,
    indoorSeating: Boolean,
    curbsidePickup: Boolean,
    takeout: Boolean,
    contactlessPayment: Boolean,
    limitedCapacity: Boolean,
    socialDistancingEnforced: Boolean,
    staffUseHandSanitizer: Boolean,
    staffSanitizeHandsBetCustomers: Boolean,
    staffWearsMasks: Boolean,
    staffWearsGloves: Boolean,
    staffGetsTemperatureChecks: Boolean,
    handSanitizerProvided: Boolean,
    customersGetTemperatureChecks: Boolean,
    safetyRating: {type: Number, default: null},
    author: {type: Schema.Types.ObjectId, ref: 'User'}
})


const restaurantSchema = new Schema({
    name: String,
    location_id: String,
    photo: String,
    phone: String,
    website: String,
    address: String,
    cuisine: [Object],
    price: String,
    safetyReviews: {type: [safetyReviewSchema], default: []}
}, {timestamps: true})

restaurantSchema.methods.getAverageSafetyRating = function() {
    const total = this.safetyReviews.reduce((sum, review) => {
    sum += review.safetyRating
    return sum
    }, 0)
    averageRating = total / this.safetyReviews.filter(review => review.safetyRating != null).length
    return averageRating
}

module.exports = mongoose.model('Restaurant', restaurantSchema)