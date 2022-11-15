import { Button , Label,  } from "../../registration/ui";
import UploadImage from '../../registration/ui/filepond'
import { FormContainer } from "../main/RegistrationFormComp";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";

export default function ImageUpload() {
  const { bizToken } = useBusinessToken();
  const {token} = useToken()
  
  const data = {
    userToken: token,
    businessToken:bizToken
  }
  return <FormContainer name='Logo upload' pageName='upload' desc='Upload company business logo'>
      {/* <!-- Left Section --> */}

          {/* <!-- Form --> */}
    <form className="px-3 mt-5 pp_form">
      <div className="form-group">
        
            <Label name='Business Logo' styles='mb-3' />
            <div className="p-5  mb-4 d-flex w-100 flex-column align-items-center justify-content-center text-center drag_area">
              {/* <div className="mb-2 drag_photo">
                <img src="img/dragphoto.svg" alt=""/>
              </div>
              <small className="drag_text">Drag file here to <br/> upload or <span>choose file</span> </small> */}
          <UploadImage  {...data} />
            </div>
      </div>
      
            <div className="mb-5 d-flex button_container justify-content-center">
              
              <Button name='NEXT' type='button' styles='btn text-white p-3 category_btn' />
            </div>
          </form>
        </FormContainer>
}