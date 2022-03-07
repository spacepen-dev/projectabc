import React from "react";
import { Container } from "react-bootstrap";

import Profile from "./Profile";
import Contact from "./Contact";
import Settings from "./Settings";
import Header from "../Header";
import FormHeader from "./FormHeader";

class Registration extends React.Component {
  state = {
    currentForm: 1,
    name: "",
    registration: "",
    about: "",
    location: "--- Select State ---",
    address: "",
    email: "",
    website: "",
    tax: "NO",
    checked: false,
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    if (name === "tax") {
      this.setState({ checked: true });
      this.setState({ [name]: "YES" });
    }
  };

  onStateChange = (e) => {
    this.setState({ location: e.target.value });
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
        <Container className='section mx-auto' style={{ maxWidth: "50.13rem" }}>
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
            website={this.state.website}
          />
          <Settings
            currentForm={this.state.currentForm}
            prevPage={this.prevForm}
            handleChange={this.onChange}
            tax={this.state.tax}
            formData={this.state}
            maxSalary={this.state.maxSalary}
            check={this.state.checked}
          />
        </Container>
      </Header>
    );
  }
}

export default Registration;
