import React, { Component } from 'react'
import * as restaurantService from '../../services/restaurantService'
import './AddReview.css'

export default class AddReview extends Component {
    state = {
        restaurantInfo: {
        ...this.props.restaurant
        },
        outdoorSeating: false,
        indoorSeating: false,
        curbsidePickup: false,
        takeout: false,
        contactlessPayment: false,
        limitedCapacity: false,
        socialDistancingEnforced: false,
        staffUseHandSanitizer: false,
        staffSanitizeHandsBetCustomers: false,
        staffWearsMasks: false,
        staffWearsGloves: false,
        staffGetsTemperatureChecks: false,
        handSanitizerProvided: false,
        customersGetTemperatureChecks: false,
        safetyRating: null,
        author: this.props.user._id
    }
    handleCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }
    handleRatingChange = (e) => {
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }

    submitReview = async () => {
        await restaurantService.addNewReview(this.state)
        this.props.history.push('/')
    }

    render() {
        return(
            <>
            <h3>{this.props.restaurant.name}</h3>
            <p>{this.props.restaurant.address}</p>
            <div className="review">
            {/* <label>Outdoor seating</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.outdoorSeating} name="outdoorSeating"/>
            <br /> */}
            {/* <label>indoorSeating</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.indoorSeating} name="indoorSeating"/>
            <br /> */}
            {/* <label htmlFor="">Curbside Pickup</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.curbsidePickup} name="curbsidePickup"/>
            <br /> */}
            {/* <label htmlFor="">takeout</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.takeout} name="takeout"/>
            <br /> */}
            <label htmlFor="">Contactless Payment</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.contactlessPayment} name="contactlessPayment"/>
            <br />
            <label htmlFor="">Limited Capacity</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.limitedCapacity} name="limitedCapacity"/>
            <br />
            <label htmlFor="">Social Distancing Enforced</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.socialDistancingEnforced} name="socialDistancingEnforced"/>
            <br />
            {/* <label htmlFor="">staffUseHandSanitizer</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.staffUseHandSanitizer} name="staffUseHandSanitizer"/>
            <br /> */}
            <label htmlFor="">Sanitize Between Customers</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.staffSanitizeHandsBetCustomers} name="staffSanitizeHandsBetCustomers"/>
            <br />
            <label htmlFor="">Staff Wears Masks</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.staffWearsMasks} name="staffWearsMasks"/>
            <br />
            <label htmlFor="">Staff Wears Gloves</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.staffWearsGloves} name="staffWearsGloves"/>
            <br />
            {/* <label htmlFor="">staffGetsTemperatureChecks</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.staffGetsTemperatureChecks} name="staffGetsTemperatureChecks"/>
            <br /> */}
            <label htmlFor="">Hand Sanitizer Provided</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.handSanitizerProvided} name="handSanitizerProvided"/>
            <br />
            {/* <label htmlFor="">customersGetTemperatureChecks</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} selected={this.state.customersGetTemperatureChecks} name="customersGetTemperatureChecks"/>
            <br /> */}
            <label id="rating" htmlFor="">Overall Safety Rating</label>
            <input type="number" min='0' max='5' onChange={this.handleRatingChange} value={this.state.safetyRating} name="safetyRating"/>
            <button onClick={this.submitReview} id="btn">SUBMIT</button>
            <a href="/" id="btn">Cancel</a>
            </div>
            </>
            )
    }
}