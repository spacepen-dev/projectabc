import React, { useRef, useState } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import OTPInput from "./OTPInput";

const OTP = () => {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);
  const [fourthValue, setfourthValue] = useState(null);
  const [fifthValue, setFifthValue] = useState(null);
  const [sixValue, setSixthValue] = useState(null);

  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();
  const fifth = useRef();
  const sixth = useRef();

  const moveToNextInput = (e) => {
    const { value, id } = e.target;

    const variables = {
      length: value.length,
      delete: "Backspace",
      id_1: "first",
      id_2: "second",
      id_3: "third",
      id_4: "fourth",
      id_5: "fifth",
      id_6: "sixth",
      first: function () {
        first.current.focus();
      },
      second: function () {
        second.current.focus();
      },
      third: function () {
        third.current.focus();
      },
      fourth: function () {
        fourth.current.focus();
      },
      fifth: function () {
        fifth.current.focus();
      },
      sixth: function () {
        sixth.current.focus();
      },
    };

    if (variables.length && id === variables.id_1) {
      variables.second();
      setFirstValue(value);
    }
    if (variables.length && id === variables.id_2) {
      variables.third();
      setSecondValue(value);
    } else if (e.code === variables.delete && id === variables.id_2) {
      variables.first();
    }
    if (variables.length && id === variables.id_3) {
      variables.fourth();
      setThirdValue(value);
    } else if (e.code === variables.delete && id === variables.id_3) {
      variables.second();
    }
    if (variables.length && id === variables.id_4) {
      variables.fifth();
      setfourthValue(value);
    } else if (e.code === variables.delete && id === variables.id_4) {
      variables.third();
    }
    if (variables.length && id === variables.id_5) {
      variables.sixth();
      setFifthValue(value);
    } else if (e.code === variables.delete && id === variables.id_5) {
      variables.fourth();
    }
    if (variables.length && id === variables.id_6) {
      setSixthValue(value);
    } else if (e.code === variables.delete && id === variables.id_6) {
      variables.fifth();
    }
    return;
  };
  const valueObj =
    firstValue + secondValue + thirdValue + fourthValue + fifthValue + sixValue;
  const a = parseFloat(valueObj);

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
        <OTPInput
          id='first'
          moveToNextInput={moveToNextInput}
          inputRef={first}
        />
        <OTPInput
          id='second'
          moveToNextInput={moveToNextInput}
          inputRef={second}
        />
        <OTPInput
          id='third'
          moveToNextInput={moveToNextInput}
          inputRef={third}
        />
        <OTPInput
          id='fourth'
          moveToNextInput={moveToNextInput}
          inputRef={fourth}
        />
        <OTPInput
          id='fifth'
          moveToNextInput={moveToNextInput}
          inputRef={fifth}
        />
        <OTPInput
          id='sixth'
          moveToNextInput={moveToNextInput}
          inputRef={sixth}
        />
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
