import React from "react";
import { Container } from "react-bootstrap";

import Profile from "./Profile";
import Contact from "./Contact";
import Settings from "./Settings";
import Header from "../Header";
import FormHeader from "./FormHeader";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  state = {
    currentForm: 1,
    name: "",
    registration: "",
    about: "",
    location: "--- Select State ---",
    category: "--- Select Category ---",
    address: "",
    email: "",
    website: "",
    tax: "NO",
    phoneNumber: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    if (name === "tax") {
      this.setState({ checked: !this.state.checked });
      this.setState({ [name]: "YES" });
    }
  };

  onStateChange = (e) => {
    this.setState({ location: e.target.value });
  };
  onCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  // current form = 1 0r 2 should have the next button
  //  current form is greater than 2 add previous and finish
  nextForm = () => {
    let currentStep = this.state.currentForm;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;

    this.setState({ currentForm: currentStep });
  };

  prevForm = () => {
    let currentStep = this.state.currentForm;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentForm: currentStep });
  };

  render() {
    return (
      <Header>
        <Container className='section mx-auto col-md-12 col-sm-12'  style={{ maxWidth: "50.13rem" }}>
          <div>
            <FormHeader currentForm={this.state.currentForm} />
          </div>
          <Profile
            currentForm={this.state.currentForm}
            nextPage={this.nextForm}
            handleChange={this.onChange}
            name={this.state.name}
            registration={this.state.registration}
            tin={this.state.tin}
            about={this.state.about}
            onStateChange={this.onStateChange}
            location={this.state.location}
          />
          <Contact
            currentForm={this.state.currentForm}
            nextPage={this.nextForm}
            prevPage={this.prevForm}
            handleChange={this.onChange}
            address={this.state.address}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
          />
          <Settings
            currentForm={this.state.currentForm}
            prevPage={this.prevForm}
            handleChange={this.onChange}
            tax={this.state.tax}
            formData={this.state}
            website={this.state.website}
            onCategoryChange={this.onCategoryChange}
            category={this.state.category}
          />
          <div className='py-4 w-100 mb-3 fs-6 text-center '>
            Already have an account?
            <Link
              to='/'
              className='d-inline-block ms-2 fs-6 text-decoration-none '>
              Login now
            </Link>
          </div>
        </Container>
      </Header>
    );
  }
}

export default Registration;
