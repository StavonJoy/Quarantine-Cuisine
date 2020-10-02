// const Restaurant = require('../models/restaurant')
const request = require('request')

module.exports = { getTARestaurantsFromLocation }

async function getTARestaurantsFromLocation(req, res) {
    const locationId = await getTALocationIdFromQuery(req.params.locationQuery)
    const restaurants = await getTARestaurantsFromLocationId(locationId)
    res.status(200).json({ restaurants })
}

async function getTALocationIdFromQuery(locationQuery) {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor1.p.rapidapi.com/locations/auto-complete',
        qs: {
          limit: '10',
          sort: 'relevance',
          offset: '0',
          lang: 'en_US',
          currency: 'USD',
          query: locationQuery
        },
        headers: {
          'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
          'x-rapidapi-key': process.env.TRIP_ADVISOR_API_KEY,
          useQueryString: true
        }
      }
      const allResults = await new Promise((resolve, reject) => {
          request(options, function(err, response, body) {
          if (err) console.log(err)
          resolve(JSON.parse(body))
          })
      })
      const firstResult = allResults.data[0]
      const locationId = firstResult.result_object['location_id']
      return locationId    
}

async function getTARestaurantsFromLocationId(locationId) {
    const options = {
        method: 'GET',
        url: 'https://tripadvisor1.p.rapidapi.com/restaurants/list',
        qs: {
          lunit: 'km',
          limit: '10',
          currency: 'USD',
          lang: 'en_US',
          location_id: locationId
        },
        headers: {
          'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
          'x-rapidapi-key': process.env.TRIP_ADVISOR_API_KEY,
          useQueryString: true
        }
      }
    const allResults = await new Promise((resolve, reject) => {
        request(options, function(err, response, body) {
        if (err) console.log(err)
        resolve(JSON.parse(body))
        })
    })
    restaurauntsFullData = allResults.data
    return restaurauntsFullData
}
