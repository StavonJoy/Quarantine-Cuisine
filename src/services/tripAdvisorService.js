export function getRestaurantsFromLocationSearch(locationQuery){
    return fetch(`/apis/tripAdvisor/locationSearch/${locationQuery}`, {
        method: 'POST'
    },{mode: 'cors'})
    .then(res => res.json())
    .then(({ restaurants }) => {
        console.log(restaurants)
        return restaurants
    })
}



