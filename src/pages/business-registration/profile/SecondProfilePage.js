import { useContext } from "react";
import { Button, Error, FormIndicator, Label, RegistrationFormHeader } from "../../registration/ui";
import { RegistrationContext } from "../main/RegistrationForm";
import UploadImage from '../../registration/ui/filepond'
import { FormContainer } from "../main/RegistrationFormComp";

export default function SecondProfilePage({handleChange, value, prevPage}) {
  
  const { page, ChangePage } = useContext(RegistrationContext);

  if (page !== 4) {
    return null;
  }

  return <FormContainer name='Profile' pageName='Profile' desc='Choose the business you want to transact now'>
      {/* <!-- Left Section --> */}

          {/* <!-- Form --> */}
          <form className="px-3 mt-5 pp_form">
      <div className="form-group">
        
            <Label name='Company Logo' styles='mb-3' />
            <div className="p-5  mb-4 d-flex w-100 flex-column align-items-center justify-content-center text-center drag_area">
              <div className="mb-2 drag_photo">
                <img src="img/dragphoto.svg" alt=""/>
              </div>
              <small className="drag_text">Drag file here to <br/> upload or <span>choose file</span> </small>
              {/* <UploadImage /> */}
            </div>
            </div>

            <div className="form-group mb-4">
              <Label name='About Business' styles='mb-3' />
              <textarea name="about" value={value} onChange={handleChange} className="form-control" placeholder="In two sentences, tell us about your company"
                id="about" cols="30" rows="5"></textarea>
            </div>

            <div className="mb-5 d-flex button_container justify-content-between">
              <Button name='BACK' onClick={prevPage} type='button' styles='btn bg-white text-black pt-2 px-3 category_btn' />
              <Button name='CONTINUE' disabled={!value? true: false} onClick={ChangePage} type='button' styles='btn text-white p-3 category_btn' />
            </div>
          </form>
        </FormContainer>
}