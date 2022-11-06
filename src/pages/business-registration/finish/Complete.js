import { useContext } from "react";
import { RegistrationContext } from "../main/RegistrationForm";
import { FormContainer } from "../main/RegistrationFormComp";
import Hand from '../../../assets/img/clap.svg';
import Stars from '../../../assets/img/starssvg.svg';
import { Button } from "../../registration/ui";

export default function CompleteRegistration() {
    const { page, ChangePage } = useContext(RegistrationContext);

    if (page !== 11) {
        return null;
    }
    return <FormContainer name='Confirmation Page'>
        {/* <h2 class="d-flex" style={{ justifyContent: 'center', alignItems: 'center', gap: '5px' }} >
            <img src="" alt="icon" />
                        
        </h2> */}
        <div className="px-3 mt-5 pp_form">
            
        <div className="d-flex" style={{ justifyContent: 'center', alignItems: 'center', gap: ' 5px' }} >
            <img src={Hand} alt="icon" />
            <img src={Stars} alt="icon" />
        </div>
        <div className="row justify-content-center">
            <div className="md-6 my-5">
                <h3 className="text-black font-weight-bold" style={{ textAlign: 'center', color: '#6246D5', fontWeight: 'bold' }}>Congratulations!!!  Spacepen Technologies</h3>
            </div>
        </div>
        <h6 className="text-black" style={{ textAlign: 'center', fontSize: '21px', fontWeight: '500' }}>With Aimienpay, you can do banking transactions to aid your business dealings with the click of a button. You can get started with setting with setting up your business internally. </h6>
        <h6 className="text-black mt-5" style={{ textAlign: 'center', fontSize: '21px', fontWeight: 'semibold' }}>Next page is the account number we create for your business.</h6>
        <div class="mt-4 d-flex justify-content-end align-items-center">
                <Button name='NEXT'  onClick={ChangePage} type='button' styles='btn text-white p-3 category_btn' />
                              
            </div>
         </div>
    </FormContainer>
}