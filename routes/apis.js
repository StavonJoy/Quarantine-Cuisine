const router = require('express').Router()
const apisCtrl = require('../controllers/apis')

router.post('/tripAdvisor/locationSearch/:locationQuery', apisCtrl.getTARestaurantsFromLocation)

module.exports = router