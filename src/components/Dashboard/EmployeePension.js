import React, { useState,useRef, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Input from "../Registration/Input";
import DashBoardText from "./DashBoardText";

const EmployeePension = ({ index, onHandleChange, employeePensionCode, companyPensionCode, prevQuestion }) => {
    const [pensionPlan, setPensionPlan] = useState({});
    const [pension, setPension] = useState();
    const buttonRef = useRef();
    

    if (index !== 3) return null;
    return <div className='d-flex flex-column justify-content-center w-100 mx-auto employee-form'>
    <Row>
      <Form.Group as={Col} controlId='formGrid'>
        <DashBoardText
          name='Company Pension Code'
          label='Enter Company pension code'
        />
        <Input
          inputName='companyPensionCode'
          type='text'
          handleChange={onHandleChange}
          value={companyPensionCode}
        //   err={validation.employeeFirstName}
        //   onPress={() =>
        //     setValidation({
        //       employeeFirstName: "",
        //     })
        //   }
                />
                
      </Form.Group>
      
        </Row>
        <Row>
        <Form.Group as={Col} controlId='formGrid'>
        <DashBoardText name='Employee Pension Scheme' label='Is employee firstname and lastname under a pension scheme already?'  />
        <select
                    name='pensionPlan'
                    
                    className='select mt-2'
                    // value='Choose an option'
                    onChange={(e) => {
                        setPensionPlan((prev) => {
                            return {...prev, scheme:e.target.value}
                        })

                    }}>
                    {console.log(pensionPlan)}
                    <option selected>Choose an option</option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No, employee do not need a pension plan</option>
                    <option value='set'>No, set up a pension plan</option>
        
                </select>
         

            </Form.Group>
        </Row>

        {pensionPlan.scheme === 'yes' &&  <Row>
        <Form.Group as={Col} controlId='formGrid'>
        <DashBoardText
          name='Employee pension code'
          label='Enter Company pension code'
        />
        <Input
            inputName='employeePensionCode'
            type='text'
            handleChange={onHandleChange}
            value={employeePensionCode}
            //   err={validation.employeeFirstName}
            //   onPress={() =>
            //     setValidation({
                //       employeeFirstName: "",
                //     })
                //   }
                />
                </Form.Group>
        </Row>
        }

        
               {/* if yes show input for employee code */}
                {/* if no show move on */}
        {/* if set the show a download botton: onclick: show list of all pension on the download button show a list of instruction and the upload file button */}
        
        {pensionPlan.scheme === 'set' &&  <Row>
        <Form.Group as={Col} controlId='formGrid'>
        <DashBoardText
          name='Pension Company'
          label='Select pension company'
                />
                   <select
                    name='pensionPlan'
                    className='select mt-2'
                    // value='Choose an option'
                    onChange={(e) => {
                        setPension(e.target.value)

                    }}>
                    <option selected>Choose a pension company</option>
                    <option value='yes'>Lead Pension</option>
                    <option value='no'>Stanbic Pension</option>
        
                </select>
             
            </Form.Group>
            <Form.Group>
            <div className='flex align-items-center justify-content-start mt-3'>

                    <Button type='button' ref={buttonRef} className='px-4 py-2' onClick={() => {
                        setPensionPlan((prev) => {
                            return {...prev,hidFile:true}
                        })
}}>
Download form
        </Button>
        </div>
            </Form.Group>
            {pensionPlan.hidFile && <Form.Group as={Col} controlId='formGrid'>
                <DashBoardText
                    name='After downloading the pension form'
                    label='Fill it and upload the form here.'
                />

                <div style={{ cursor: 'pointer' }}>
                    <Input type='file' hidden />
                    {/* <i class="bi bi-cloud-arrow-up" style={{fontSize:'5rem'}}></i> */}

                </div>
            </Form.Group>
            }
            
        </Row>
            
        }
       
        <div className='mt-4 ms-auto double-btns '>
        <Button type='button' className='button' onClick={prevQuestion}>
          Back
        </Button>
        <Button
          type='button'
          className='button ms-4'
          onClick={() => {
            // Validation();
          }}>
          Continue
         </Button>
    </div>
  </div>
}


export default EmployeePension;