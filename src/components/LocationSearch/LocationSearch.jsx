import React, { Component } from 'react';
import * as tripAdvisorService from '../../services/tripAdvisorService'

class LocationSearch extends Component {
    state = {
        restaurants: [],
        locationQuery: ''
    }
    getRestaurants = async () => {
        const restaurants = await tripAdvisorService.getRestaurantsFromLocationSearch(this.state.locationQuery)
        this.setState({ restaurants })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return(
            <>
            <h3>Restaurants:</h3>
            <input type="text" placeholder="enter location" value={this.state.locationQuery} name="locationQuery" onChange={this.handleChange}/>
            <button onClick={this.getRestaurants}>Search Restaraunts</button>
            {this.state.restaurants && this.state.restaurants.length ?
            <>
            {this.state.restaurants.map(rest => (
                <>
                <h3>{rest.name}</h3>
                <h3>id: {rest.location_id}</h3>
                {/* <h3>{rest['photo'].images['small'].url}</h3> */}
                <p>{rest.description}</p>
                <h3>{rest.phone}</h3>
                <h3>{rest.website}</h3>
                </>
            ))}
            </>
            :
            <h3>Loading...</h3>
    }
            </>
        )
    }
}

export default LocationSearch