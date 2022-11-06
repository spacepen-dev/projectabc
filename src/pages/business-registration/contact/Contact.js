import { useContext } from "react";
import { Button, Input, Label,  } from "../../registration/ui";
import { RegistrationContext } from "../main/RegistrationForm";
import { FormContainer } from "../main/RegistrationFormComp";

export default function BusinessContact({phone ,addressValue, email, website, handleChange}) {

    const { page, ChangePage } = useContext(RegistrationContext);

   

    const address = {
        id: 'officeAddress',
        styles: 'form-control py-2',
        name: 'officeAddress',
        type: 'text',
        placeholder: 'Input office address',
        value: addressValue,
        handleChange
    };


    const emailProps = {
        type: "text",
        styles: 'form-control py-2',
        placeholder: "E.g businessName@mail.com",
        id: "emailAddress",
        name: 'emailAddress',
        value: email,
        handleChange,
        
    };

    const phoneProps = {
        type: "text",
        styles: 'form-control py-2',
        placeholder: "Enter business phone number",
        id: "phoneNumber",
        name: 'phoneNumber',
        value: phone,
        handleChange
        
    };

    const websiteprops = {
        type: "text",
        styles: 'form-control py-2',
        placeholder: "E.g www.yourwebsite.com",
        id: "registrationNumber",
        name: 'registrationNumber',
        value: website,
        handleChange
    }

    if (page !== 6) {
        return null;
      }


    return <FormContainer name='Contact' desc='Choose the business you want to transact now.' pageName='Contact'>
                    
        <form class="px-3 mt-5 pp_form">
            <div class="form-group mb-4">
                <Label name='Office Address' styles='mb-3' />
                <Input
                    {...address} />

            </div>
            <div class="form-group mb-4">
                <Label name='Email address' styles='mb-3' />
                <Input {...emailProps} />
            </div>
            
            <div class="form-group mb-4">
                <Label name='Phone number' styles='mb-3' />
                
                <Input {...phoneProps} />
            </div>
            <div class="form-group mb-4">
                      
                <Label name='Business website (optional)' styles='mb-3' />
                <Input {...websiteprops} />
            </div>
            <div class="mb-3 d-flex justify-content-end">
                <Button name='NEXT' disabled={(!addressValue && !email && !phone) ? true : false } onClick={ChangePage} type='button' styles='btn text-white p-3 category_btn' />
                            
            </div>
        </form>
           
    </FormContainer>
            
      
}