import { useEffect, useRef } from "react";
import { Button, FormIndicator, Input, Label, RegistrationFormHeader } from "../../registration/ui"

export function FormContainer({children, name, desc, pageName}) {
    return <div class="mt-3 mt-md-5 container">
    <div class="row">
        {/* <!-- Left Section --> */}
       <FormIndicator pageName={pageName} />

        {/* <!-- Right Section --> */}
        <div class="col">
            <div class="pp_right_section">
                {/* <!-- Heading --> */}
                    <RegistrationFormHeader name={name} desc={desc} />
                    {children}
                </div>
            </div>
        </div>
        </div>
}





export function FundUI({ desc, click, ChangePage,label,props, res, name }) {
    const buttonRef = useRef();

    function ChooseYes() {
        click("Yes");
        // ChangePage()
    }
    function ChooseNO() {
        click("No")
        // ChangePage()
        
    }

    useEffect(() => {
        buttonRef.current.disabled = true;
        if (props.value) {
            buttonRef.current.disabled = false;
        } else if (res === 'No') {
            buttonRef.current.disabled = false;
        } 
       
    },[props.value,res])

    return <FormContainer name={name} desc={desc}>
        <div class="row justify-content-center" style={{ height: '60vh' }}>
            <div className="col-md-6 my-5 mx-auto">
                <h3 className="mt-5 text-center">
                    {desc}
                </h3>
                {console.log(props.value)}
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <Button name='Yes' type='button' onClick={ChooseYes} styles='btn text-white px-4' />
                    <Button name='No' onClick={ChooseNO} type='button' styles='btn text-black bg-white shadow px-4 ms-4' />

                </div>
            </div>
            {res === 'Yes' && <div class="form-group mb-4">
                      
                <Label name={label} styles='mb-3' />
                <Input {...props} />
            </div>}
            

            <div class="mb-3 d-flex justify-content-end align-items-center">
                <Button name='CONTINUE' buttonref={buttonRef} onClick={ChangePage} type='button' styles='btn text-white p-3 category_btn' />
                              
            </div>
        </div>
    </FormContainer>
};

export function FundInputUI({name, desc,label,props,res}) {

    return <FormContainer name={name} desc={desc}>

        <div class="row justify-content-center" style={{ height: '60vh' }}>
            {/* <!-- Form --> */}
            <form class="px-3 mt-5 pp_form">
         
                <div class="form-group mb-4">
                      
                    <Label name={label} styles='mb-3' />
                    <Input {...props} />
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <Button name='CONTINUE' disabled={!res ? true: false} type='button' styles='btn text-white p-3 category_btn' />
                            
                </div>
            </form>
        </div>
    </FormContainer>
}
        