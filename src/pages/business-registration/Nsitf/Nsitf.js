import { useContext } from "react";
import { RegistrationContext } from "../main/RegistrationForm";
import { FundUI } from "../main/RegistrationFormComp"



export default function NSITF({click, res, housingValue, handleChange}) {

    const { page, ChangePage } = useContext(RegistrationContext);


    const props = {
        desc: 'Is your business NSITF compliant?',
        name: 'NSITF',
        label: 'NSITF company code',
        click,
        ChangePage,
        res,
        pageName:'Funds',
        props: {
            id: 'nsitfCode',
            styles: 'form-control py-2',
            name: 'nsitfCode',
            type: 'text',
            placeholder: 'Input our company NSITF code',
            handleChange: handleChange,
            value: housingValue
        }
    }
    
    if (page !== 9) {
        return null;
    }
   
 

    return <FundUI {...props} />
}



