import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container loginAndSignUp">
        <div className="row" style={{ height: '15vh' }}></div>
        <div className="col">
          <h3 style={{ textAlign: 'center', margin: '30px' }}>join the community</h3>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  name="userFirstName"
                  onChange={(e) => this.props.handleUserChange(e)}
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  name="userLastName"
                  onChange={(e) => this.props.handleUserChange(e)}
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  name="userEmail"
                  onChange={(e) => this.props.handleUserChange(e)}
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => this.props.handleUserChange(e)}
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                name="userStreet"
                onChange={(e) => this.props.handleUserChange(e)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                name="userStreet2"
                onChange={(e) => this.props.handleUserChange(e)}
              ></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="userCity"
                  onChange={(e) => this.props.handleUserChange(e)}
                ></input>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select
                  id="inputState"
                  name="userState"
                  className="form-control"
                  onChange={(e) => this.props.handleUserChange(e)}
                >
                  <option defaultValue="">Choose...</option>
                  <option value="CA">CA</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  name="userZip"
                  onChange={(e) => this.props.handleUserChange(e)}
                ></input>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-dark loginAndSignUpBtn"
              onClick={(e) => this.props.handleSignUpSubmit(e)}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="row" style={{ height: '20vh' }}></div>
      </div>
    );
  }
}

export default SignUp;
