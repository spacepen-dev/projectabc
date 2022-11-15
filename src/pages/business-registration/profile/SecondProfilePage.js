import { useContext, useEffect, useState } from "react";
import { Button, Input, Label, Select } from "../../registration/ui";
import { LGA } from "../../registration/lga";
import { RegistrationContext } from "../main/RegistrationForm";
import { stateFunt} from "./ProfileComp";
import { FormContainer } from "../main/RegistrationFormComp";




export default function SecondProfilePage({ stateValue, lgaValue, tinValue, handleChange, prevPage,about }) {
  
  const { page, ChangePage } = useContext(RegistrationContext);
  const [lga, setLga] = useState([]);
  


  useEffect(() => {
    if (!stateValue) return null;
    setLga(()=> LGA.filter((data)=>data.state === stateValue))

  }, [stateValue])
  

  
function lagFunt() {
  return lga.map(({ lga }, id) => {
    return <option key={id} value={lga}>{lga}</option>
  });
  };
  
  if (page !== 4) {
    return null;
  };

  const props = {
    styles: 'form-control py-2',
    name: 'stateTin',
    type:"text",
    value: tinValue,  
    handleChange:handleChange, 
    placeholder:"Input TIN here (optional)", 
    id:"tin"

}


  return <FormContainer name='Profile' pageName='Profile' desc='Choose the business you want to transact now'>
          {/* <!-- Form --> */}
          <form className="px-3 mt-5 pp_form   ">
            <div className="form-group mb-4">
              <Label name='State' styles='mb-3' />
              <Select elem={stateFunt} name='state' onChange={handleChange} value={stateValue} />
            </div>
            <div className="form-group  mb-4">
              <Label name='Local government' styles='mb-3' />
              <Select elem={lagFunt} name='lga' onChange={handleChange} value={lgaValue} />

      </div>
      
      <div className="form-group mb-4">
              <Label name='About Business' styles='mb-3' />
              <textarea name="about" value={about} onChange={handleChange} className="form-control" placeholder="In two sentences, tell us about your company"
                id="about" cols="30" rows="5"></textarea>
            </div>
            <div className="form-group mb-4">
              <Label name='TIN' styles='mb-3' />

              <Input {...props} />

              
              <small className='d-inline-block mt-2'>(If your company does not have a TIN Number, click <a href="/">here</a> to register one with your
                state government)</small>
            </div>
            
            <div className="mb-3 mt-5 button_container d-flex justify-content-between">
            <Button name='BACK' onClick={prevPage} type='button' styles='btn bg-white text-black pt-2 px-3 category_btn' />
              <Button onClick={ChangePage} disabled={(!lgaValue) ? true : false} name='NEXT' type='button' styles='btn text-white p-3 category_btn' />
            </div>
          </form>
      </FormContainer>
}