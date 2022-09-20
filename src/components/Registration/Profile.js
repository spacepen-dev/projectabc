import React, { useState } from "react";
import { Button, FormGroup, Container } from "react-bootstrap";

import Input from "./Input";
import SubHeader from "./SubHeader";
import LabelText from "./LabelText";

const Profile = ({
  currentForm,
  handleChange,
  name,
  registration,
  about,
  location,
  nextPage,
  onStateChange,
}) => {
  const [nameErr, setNameErr] = useState("");
  const [registrationErr, setRegistrationErr] = useState("");
  const [aboutErr, setAboutErr] = useState("");
  const [locationErr, setLocationErr] = useState("");

  const states = [
    "--- SELECT STATE ---",
    "Abia ",
    "Adamawa ",
    "Anambra ",
    "Bauchi ",
    "Bayelsa ",
    "Borno ",
    "Delta ",
    "Ebonyi ",
    "Enugu ",
    "Gombe ",
    "Imo ",
    "Jigawa ",
    "Kano ",
    "katsina ",
    "Kebbi ",
    "Kogi ",
    "Kwara ",
    "Nasarawa ",
    "Niger ",
    "Ondo ",
    "Osun ",
    "Plateau ",
    "Sokoto ,",
    "Taraba ",
    "Yobe ",
    "Zamfara ",
    "Ekiti ",
    "Lagos ",
    "Benue ",
    "Oyo ",
    "Ogun ",
    "Cross River ",
    "Rivers ",
    "Akwa Ibom ",
    "Kaduna ",
    "Edo ",
    "Abuja FCT",
  ];

  const Validation = () => {
    if (!name) {
      setNameErr("Company Name is Required!");
    } else if (!about) {
      setAboutErr("About Company is Required!");
    } else if (location === "No State") {
      console.log();
      setLocationErr("Invalid location");
    } else {
      nextPage();
    }
  };

  if (currentForm !== 1) {
    return null;
  }
  return (
    <div className='mx-auto w-75'>
      <div>
        <SubHeader>Fill in Your Company Details</SubHeader>
      </div>
      <Container>
        <FormGroup className='ms-2'>
          {/* first input */}
          <div className='field-container'>
            <LabelText label='Enter the name of your company' name='Name' />
            <Input
              inputName='name'
              type='text'
              value={name}
              handleChange={handleChange}
              err={nameErr}
              onPress={() => setNameErr("")}
            />
          </div>
          <div className='field-container'>
            <LabelText
              label='Input the registration number of your company'
              name='Registration Number'
            />
            <Input
              inputName='registration'
              type='text'
              value={registration}
              handleChange={handleChange}
              err={registrationErr}
              onPress={() => setRegistrationErr("")}
            />
          </div>

          {/* Second input */}
          {/* <div className='field-container'>
            <LabelText label='Input the TIN of your company' name='TIN' />
            <Input
              inputName='tin'
              type='number'
              value={tin}
              handleChange={handleChange}
              err={tinErr}
              onPress={() => setTinErr("")}
            />
          </div> */}

          {/* Third input */}
          <div className='field-container'>
            <LabelText
              label='Tell us about your company'
              name='About Company'
            />
            <Input
              inputName='about'
              type='text'
              value={about}
              handleChange={handleChange}
              err={aboutErr}
              pad={5}
              padTop={1}
              onPress={() => setRegistrationErr("")}
            />
          </div>
          {/* fifth input */}
          {/* <div> */}
          <div className='select-fields'>
            <LabelText
              label='Select the location of your company in Nigeria'
              name='State'
            />

            <div sm='10' className='field-container'>
              <select
                name='location'
                className='text-left select'
                onChange={onStateChange}>
                {states.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* </div> */}
          <div className='button-container d-flex justify-content-end align-items-end'>
            <Button
              type='button'
              className='button ms-4 next'
              onClick={Validation}>
              NEXT
            </Button>
          </div>
        </FormGroup>
      </Container>
    </div>
  );
};

export default Profile;
