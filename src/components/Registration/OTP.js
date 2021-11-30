import React, { useState } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpdata, setData] = useState(null);

  const handleOtp = (elem, index) => {
    // check if the value is a number or text
    if (isNaN(elem.target.value)) return false;
    setData(elem.target.value);
    setOtp([
      ...otp.map((input, inputIndex) =>
        index === inputIndex ? elem.target.value : input
      ),
    ]);
    if (elem.target.nextSibling) {
      elem.target.nextSibling.focus();
    }
  };

  return (
    <Container className='otp px-1'>
      <div>
        <Header />
      </div>
      <div className='w-100'>
        <h2
          className='mb-3 py-2'
          style={{
            fontSize: "3rem",
            color: "#23549e",
            lineHeight: "3.6rem",
            fontWeight: "700",
          }}>
          OTP confirmation
        </h2>
      </div>
      <div>
        <p
          style={{
            fontSize: "2.25rem",
            color: " #23549e",
            lineHeight: "2.7rem",
          }}>
          Enter the 6-digit pin that was sent to mail@mail.com
        </p>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2 otp-input-container'>
        {otp.map((inputData, index) => {
          // console.log(inputData);
          return (
            <input
              key={index}
              type='text'
              className='text-center'
              maxLength='1'
              value={inputData}
              onChange={(e) => handleOtp(e, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <div className='py-4 mt-3 w-75 fs-3 text-center'>
        Didn't get it in your email? <span>Resend the code</span>
      </div>
      {/* </Col> */}
      {/* </Row> */}
    </Container>
  );
};

export default OTP;
