import { useContext } from "react";
import { RegistrationContext } from "../main/RegistrationForm";
import { FundUI } from "../main/RegistrationFormComp"



export default function NSITF({click, res, housingValue, handleChange, 
prevPage}) {

    const { page, ChangePage } = useContext(RegistrationContext);


    const props = {
        desc: 'Is your business NSITF compliant?',
        name: 'NSITF',
        label: 'NSITF company code',
        click,
        ChangePage,
        prevPage,
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
    
    if (page !== 8) {
        return null;
    }
   
 

    return <FundUI {...props} />
}



