import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <>
      <h1>Quarantine Cuisine</h1>
      <header>
      </header>
      <main className="Login">
        <h3>Log In</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            placeholder="Password"
            onChange={this.handleChange}
          />
          {/* <label htmlFor="password">Password</label> */}
          <button className="btn green" id="btn">Log In</button>&nbsp;&nbsp;&nbsp;
          <Link className="btn red" to="/" id="btn">
            Cancel
          </Link>
        </form>
      </main>
      </>
    );
  }
}

export default LoginPage;
