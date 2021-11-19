import React, { useState } from "react";
import { Container, FormGroup, Button } from "react-bootstrap";
import Profile from "./Profile";
import Contact from "./Contact";
import Settings from "./Settings";
import Header from "../Header";
import FormHeader from "./FormHeader";

const Registration = () => {
  const [currentForm, setcurrentForm] = useState(1);

  // current form = 1 0r 2 should have the next button
  //  current form is greater than 2 add previous and finish
  const nextForm = () => {
    let currentStep = currentForm;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setcurrentForm(currentStep);
  };

  const prevForm = () => {
    let currentStep = currentForm;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setcurrentForm(currentStep);
  };

  // prevButton = () => {
  //   if (this.state.currentForm !== 1) {
  //     // add previous
  //     return (
  //       <Button
  //         type='button'
  //         className='button ms-auto'
  //         onClick={this.prevForm}>
  //         BACK
  //       </Button>
  //     );
  //   }
  //   return null;
  // };

  // nextButton = () => {
  //   if (this.state.currentForm < 3) {
  //     // add the next button
  //     return (
  //       <Button
  //         type='button'
  //         className='button ms-4 next'
  //         onClick={this.nextForm}>
  //         NEXT
  //       </Button>
  //     );
  //   }
  //   return null;
  // };
  // const finishButton = () => {
  //   if (this.state.currentForm === 3) {
  //     // add the next button
  //     return (
  //       <Button type='button' className='button ms-4'>
  //         FINISH
  //       </Button>
  //     );
  //   }
  //   return null;
  // };

  return (
    <Container className='section pb-4'>
      <FormGroup>
        <div>
          <Header />
        </div>
        <div>
          <FormHeader currentForm={currentForm} />
        </div>
        <Profile currentForm={currentForm} onSubmit={nextForm} />
        <Contact
          currentForm={currentForm}
          onSubmit={nextForm}
          prevPage={prevForm}
        />
        <Settings currentForm={currentForm} prevPage={prevForm} />
        <div className='button-container double-btns d-flex justify-content-end align-items-end'></div>
      </FormGroup>
    </Container>
  );
};

export default Registration;
