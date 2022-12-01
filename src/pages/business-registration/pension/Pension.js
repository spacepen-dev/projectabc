import { useContext } from "react";
import { RegistrationContext } from "../main/RegistrationForm";
import { FundUI } from "../main/RegistrationFormComp"


export default function Pension({ click, res, pensionValue, handleChange, prevPage }) {
    
    const { page, ChangePage } = useContext(RegistrationContext);

    const props = {
        desc: 'Is your business Pension compliant?',
        click,
        ChangePage,
        name: 'Pension',
        res,
        prevPage:prevPage,
        pageName:'Funds',
       label:'Company pension code',
        props: {
            id: 'pension',
            styles: 'form-control py-2',
            name: 'pensionCode',
            type: 'text',
            value: pensionValue,
            handleChange:handleChange,
            placeholder: 'Input your company pension code',
        }
    } 
   
    if (page !== 6) {
        return null;
    }

    return <FundUI {...props} />
};