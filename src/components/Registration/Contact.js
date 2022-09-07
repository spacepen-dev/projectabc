import React, { useState } from "react";
import SubHeader from "./SubHeader";
import { FormGroup, Button } from "react-bootstrap";

import Input from "./Input";
import LabelText from "./LabelText";

const Contact = ({
  currentForm,
  address,
  email,
  handleChange,
  prevPage,
  nextPage,
  phoneNumber,
}) => {
  const [addressErr, setAddressErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneNumberErr, setPhoneNumberErr] = useState("");

  let regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Validation = () => {
    if (!address) {
      setAddressErr("Company's address is required!");
    } else if (!email || !regexp.test(String(email).toLowerCase())) {
      setEmailErr("Invalid email address");
    } else if (
      !phoneNumber ||
      phoneNumber.length > 11 ||
      phoneNumber.length < 11
    ) {
      setPhoneNumberErr("Invalid phone number");
    } else {
      nextPage();
    }
  };
  if (currentForm !== 2) {
    return null;
  }
  return (
    <div className='mx-auto w-75'>
      <div>
        <SubHeader>How do we reach you?</SubHeader>
      </div>
      <div>
        <FormGroup className='ms-2'>
          <div className='field-container'>
            <LabelText
              label='Enter the full address of your company'
              name='Address'
            />
            <Input
              inputName='address'
              type='text'
              handleChange={handleChange}
              err={addressErr}
              onPress={() => setAddressErr("")}
              value={address}
            />
          </div>
          <div className='field-container'>
            <LabelText
              label='Enter the email address of company'
              name='Email Address'
            />

            <Input
              inputName='email'
              type='text'
              handleChange={handleChange}
              err={emailErr}
              onPress={() => setEmailErr("")}
              value={email}
            />
          </div>
          <div className='field-container'>
            <LabelText label='Enter company phone number' name='Phone Number' />

            <Input
              inputName='phoneNumber'
              type='tel'
              handleChange={handleChange}
              err={phoneNumberErr}
              onPress={() => setPhoneNumberErr("")}
              value={phoneNumber}
            />
          </div>

          <div className='button-container double-btns d-flex justify-content-end align-items-end'>
            <Button type='button' className='button ms-auto' onClick={prevPage}>
              Back
            </Button>
            <Button
              type='button'
              className='button ms-4 next'
              onClick={Validation}>
              NEXT
            </Button>
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default Contact;
