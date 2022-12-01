import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  return (
    <>
      {active && (
        <Modal show={true}>
          <div className='col-12'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Are You Sure You Want To Signout?
                </h5>
              </div>
              <div className='modal-body'>
                {/* <Input
                  type='text'
                  handleChange={this.onAmountHandle}
                  err={this.state.validation}
                  onFocus={() => this.setState({ validation: "" })}
                  readonly
                  value={}
                /> */}

                <Form
                  className='button-container double-btns d-flex justify-content-end align-items-end'
                  // onSubmit={this.submitAmount}
                >
                  <Button
                    type='button'
                    className='button ms-auto'
                    // disabled={this.state.request}
                    onClick={() => {
                      setActive(false);
                      navigate("/dashboard/overview");
                    }}>
                    NO
                  </Button>
                  <Button
                    type='button'
                    className='button mx-2'
                    onClick={() => {
                      localStorage.clear();
											setActive(false);
											navigate("/");
                    }}>
                    YES
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignOut;
