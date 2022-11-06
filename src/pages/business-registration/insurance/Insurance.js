import { useContext } from "react";
import { RegistrationContext } from "../main/RegistrationForm";
import { FundUI } from "../main/RegistrationFormComp"

export default function Insurance({click,res, insuranceValue, handleChange}) {
        const { page, ChangePage } = useContext(RegistrationContext);

        const props = {
                desc: 'Is your business Health insurance compliant?',
                name: 'Health Insurance',
                label: 'Company health insurance code',
                click,
                ChangePage,
                res,
                pageName:'Funds',
                props: {
                        id: 'insurance',
                        styles: 'form-control py-2',
                        name: 'healthInsuranceCode',
                        type: 'text',
                        placeholder: 'Input your company insurance code',
                        handleChange: handleChange,
                        value: insuranceValue,
                }
        }

        if (page !== 8) {
        return null;
        }

return <FundUI {...props} />
}