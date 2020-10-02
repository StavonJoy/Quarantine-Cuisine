export function addNewReview(restaurantInfo, reviewInfo) {
    return fetch(`/restaurants`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(reviewInfo)
    }, {mode: 'cors'})
    .then(res => res.json())
    .then(({ data }) => {
        console.log(data)
        return data
    })
} 