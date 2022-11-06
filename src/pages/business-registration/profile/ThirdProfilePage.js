import { useContext, useEffect, useState } from "react";
import { Button, FormIndicator, Input, Label, RegistrationFormHeader, Select } from "../../registration/ui";
import { LGA } from "../../registration/lga";
import { RegistrationContext } from "../main/RegistrationForm";
import { stateFunt} from "./ProfileComp";




export default function ThirdProfilePage({ stateValue, lgaValue, tinValue, handleChange }) {
  
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
  
  if (page !== 5) {
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


  return <div className="mt-3 mt-md-5 container">
    <div className="row">
      {/* <!-- Left Section --> */}
      <FormIndicator pageName='Profile' />
      {/* <!-- Right Section --> */}
      <div className="col">
        <div className="pp_right_section">
          <RegistrationFormHeader name='Profile' desc='Choose the business you want to transact now' />
          {/* <!-- Form --> */}
          <form className="px-3 mt-5 pp_form">
            <div className="form-group mb-4">
              <Label name='State' styles='mb-3' />
              <Select elem={stateFunt} name='state' onChange={handleChange} value={stateValue} />
            </div>
            <div className="form-group mb-4">
              <Label name='Local government' styles='mb-3' />
              <Select elem={lagFunt} name='lga' onChange={handleChange} value={lgaValue} />

            </div>
            <div className="form-group mb-4">
              <Label name='TIN' styles='mb-3' />

              <Input {...props} />

              
              <small className='d-inline-block mt-2'>(If your company does not have a TIN Number, click <a href="/">here</a> to register one with your
                state government)</small>
            </div>
            
            <div className="mb-3 d-flex justify-content-end">
              <Button onClick={ChangePage} disabled={(!lgaValue) ? true : false} name='NEXT' type='button' styles='btn text-white p-3 category_btn' />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
}