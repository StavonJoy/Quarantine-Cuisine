import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AddReview from '../../pages/AddReview/AddReview';
import * as tripAdvisorService from '../../services/tripAdvisorService'
import './LocationSearch.css'
import NavBar from '../../components/NavBar/NavBar'

class LocationSearch extends Component {
    state = {
        restaurants: [],
        locationQuery: '',
        loading: false
    }
    getRestaurants = async () => {
        this.setState({loading: true})
        const restaurants = await tripAdvisorService.getRestaurantsFromLocationSearch(this.state.locationQuery)
        this.setState({ restaurants, loading: false })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return(
            <>
            <input type="text" placeholder=" Enter a city..." value={this.state.locationQuery} name="locationQuery" onChange={this.handleChange}/><br></br>
            <button onClick={this.getRestaurants} id="btn" className="btn btn-info">Search</button>
            <NavBar />
            {this.state.loading === true ? 
                <h5>Loading your results...</h5>
            :
            <>
            {this.state.restaurants && this.state.restaurants.length ?
            <>
            {this.state.restaurants.map(rest => (
                <>
                <br></br>
                <div className="card">
                    <h5 className="card-header">{rest.name}</h5>
                    <div className="card-body">
                        <img src={rest.photo} alt=""/>
                        <p>{rest.phone}</p>
                        <p>{rest.address}</p>
                        <a className="card-text" src={rest.website} target="_blank">View website</a>
                        {/* <p className="card-text">{rest.description}</p> */}
                        <div className="covid">
                        <p id="covid-head">COVID-19 Health & Safety Measures</p>
                        { rest.safetyReviews ?
                        <p>{rest.staffWearsGloves}</p>
                        :
                        <p>No safety reviews yet</p>
                        }
                        </div>
                        <Link to={{ pathname: '/addReview', state: {restaurant: rest} }} >
                        <button className="btn btn-primary" id="btn">ADD Review</button>
                        </Link>
                    </div>
                </div>
                </>
            ))}
            </>
            :
            <></>
        }
        </>}
        </>
        )
    }
}

export default LocationSearch