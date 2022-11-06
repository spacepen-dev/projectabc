import { useContext } from "react";
import { Button, Error, FormIndicator, Label, RegistrationFormHeader } from "../../registration/ui";
import { RegistrationContext } from "../main/RegistrationForm";
import UploadImage from '../../registration/ui/filepond'

export default function SecondProfilePage({handleChange, value}) {
  
  const { page, ChangePage } = useContext(RegistrationContext);

  if (page !== 4) {
    return null;
  }

  return <div className="mt-3 mt-md-5 container">
    <div className="row">
      {/* <!-- Left Section --> */}
      <FormIndicator pageName='Profile'/>

      {/* <!-- Right Section --> */}
      <div className="col">
        <div className="pp_right_section">
       
          <RegistrationFormHeader name='Profile' desc='Choose the business you want to transact now' />

          {/* <!-- Form --> */}
          <form className="px-3 mt-5 pp_form">
            <Label name='Company Logo' styles='mb-3' />

            <div className="p-5 mb-4 d-flex flex-column align-items-center justify-content-center text-center drag_area">
              {/* <div className="mb-2 drag_photo">
                <img src="img/dragphoto.svg" alt=""/>
              </div>
              <small className="drag_text">Drag file here to <br/> upload or <span>choose file</span> </small> */}
              <UploadImage />
            </div>

            <div className="form-group mb-4">
              <Label name='About Business' styles='mb-3' />
              <textarea name="about" value={value} onChange={handleChange} className="form-control" placeholder="In two sentences, tell us about your company"
                id="about" cols="30" rows="5"></textarea>
            </div>

            <div className="mb-5 d-flex justify-content-end">
              <Button name='CONTINUE' disabled={!value? true: false} onClick={ChangePage} type='button' styles='btn text-white p-3 category_btn' />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
}