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
    masksRequired: Boolean,
    handSanitizerProvided: Boolean,
    customersGetTemperatureChecks: Boolean,
    safetyRating: {type: Number, default: null},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
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
    safetyReviews: {type: [safetyReviewSchema], default: []},
    avMasksReq: {type: Boolean, default: false},
    avStaffMasks: {type: Boolean, default: false},
    avSocDist: {type: Boolean, default: false},
    avLimCap: {type: Boolean, default: false},
    avSanBet: {type: Boolean, default: true},
    avCLessPay: {type: Boolean, default: false}
}, {timestamps: true})

restaurantSchema.methods.getAverageSafetyRating = function() {
    const total = this.safetyReviews.reduce((sum, review) => {
    sum += review.safetyRating
    return sum
    }, 0)
    averageRating = total / this.safetyReviews.filter(review => review.safetyRating != null).length
    return averageRating
}

restaurantSchema.methods.setAverages = function() {
    this.avMasksReq = this.safetyReviews.reduce((bools, rev) => {
        if (rev.masksRequired) bools += 1
        return bools
    }, 0) > 0.5 * this.safetyReviews.length ? true : false
    this.avStaffMasks = this.safetyReviews.reduce((bools, rev) => {
        if (rev.staffWearsMasks) bools += 1
        return bools
    }, 0) > 0.5 * this.safetyReviews.length ? true : false
    this.avSocDist = this.safetyReviews.reduce((bools, rev) => {
        if (rev.socialDistancingEnforced) bools += 1
        return bools
    }, 0) > 0.5 * this.safetyReviews.length ? true : false
    this.avLimCap = this.safetyReviews.reduce((bools, rev) => {
        if (rev.limitedCapacity) bools += 1
        return bools
    }, 0) > 0.5 * this.safetyReviews.length ? true : false
    this.avSanBet = this.safetyReviews.reduce((bools, rev) => {
        if (rev.staffSanitizeHandsBetCustomers) bools += 1
        return bools
    }, 0) > 0.5 * this.safetyReviews.length ? true : false
    this.avCLessPay = this.safetyReviews.reduce((bools, rev) => {
        if (rev.contactlessPayment) bools += 1
        return bools
    }, 0) > 0.5 * this.safetyReviews.length ? true : false
}

module.exports = mongoose.model('Restaurant', restaurantSchema)