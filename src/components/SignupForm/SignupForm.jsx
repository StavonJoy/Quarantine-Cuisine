import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
          />
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            autoComplete="off"
            id="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          /><br></br>
          {/* <label htmlFor="confirm">Confirm Password</label> */}
          <button disabled={this.isFormInvalid()} id="btn" className="btn">Sign Up</button>
          &nbsp;&nbsp;
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default SignupForm;
