import { useFormik } from 'formik';
import { createContext, useState } from 'react';
import TermsAndCondition from '../../registration/terms'
import BusinessContact from "../contact";
import Insurance from "../insurance/Insurance";
import NSITF from "../Nsitf";
import Pension from "../pension";
import FirstProfilePage from "../profile/FirstProfilePage";
import SecondProfilePage from "../profile/SecondProfilePage";
import ThirdProfilePage from "../profile/ThirdProfilePage";

import BusinessCategory from '../catergory';
import BankDetails from '../bank-details';
// import CompleteRegistration from '../finish';




export const RegistrationContext = createContext();

export default function RegistraionFormController() {

    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [compliance, setCompliance] = useState({ pension: '', insurance: '', housing: '' });
    const [bankDetails, setBankDetails] = useState({ code:'', name:'', owner:''});


    function ChangePage() {
        setPage((prev) => prev + 1);
    }
    function prevPage() {
        setPage((prev) => prev - 1);
    }

    const formik = useFormik({
        initialValues: {
            
                agreementSigned: 'Yes',
                businessName: '',
                tradingName: '',
                registrationNumber: '',
                companyLogo: '',
                about: '',
                state: '',
                lga: '',
                stateTin: '',
                officeAddress: '',
                emailAddress: '',
                phoneNumber:'',
                website:'',
                businessCategory: '',
                pensionCompliance: compliance.pension,
                pensionCode: '',
                healthInsuranceCompliance: compliance.insurance,
                healthInsuranceCode: '',
                nsitfCompliance: compliance.housing,
                nsitfCode: '',
                businessBankName: bankDetails.name,
                businessBankAccountName: bankDetails.owner,
                businessAccountNumber: '',
                businessBankCode:bankDetails.code
            
           
        },
        onSubmit: (values) => {
            values.pensionCompliance = compliance.pension
            values.healthInsuranceCode = compliance.insurance
            values.nsitfCompliance = compliance.housing
            values.businessBankName = bankDetails.name
            values.businessBankAccountName = bankDetails.owner
            values.businessBankCode=bankDetails.code
        

            console.log(values)
        }
    })
    
    const categoryDetails = {
        getValue: (name) => setName(name),
        name
    }

    const firstProfile = {
        businessNameValue: formik.values.businessName,
        tradingNameValue: formik.values.tradingName,
        registrationNumberValue: formik.values.registrationNumber,
        handleChange: formik.handleChange,
        businessError: formik.errors.businessName,
        businessTouched: formik.touched.businessName,
        registrationError: formik.errors.registrationNumber,
        registrationTouched: formik.touched.registrationNumber,
        prevPage: prevPage
    }
    
    const about = {
        value: formik.values.about,
        handleChange: formik.handleChange,
        prevPage: prevPage
        
    }
    
    const thirdProfile = {
        stateValue: formik.values.state,
        lgaValue: formik.values.lga,
        tinValue: formik.values.stateTin,
        handleChange: formik.handleChange,
        prevPage: prevPage
        
        
    }
    
    const contact = {
        phone: formik.values.phoneNumber,
        website: formik.values.website,
        email: formik.values.emailAddress,
        address: formik.values.officeAddress,
        handleChange: formik.handleChange,
        prevPage: prevPage
        // error: formik.errors.phoneNumber,
        
        
    }
    
    const pensionProps = {
        res: compliance.pension,
        pensionValue: formik.values.pensionCode,
        handleChange: formik.handleChange,
        prevPage: prevPage,
        click:(value) => setCompliance((prev) => {
            return { ...prev, pension: value }
        }) 
    }
    
    const insuranceProps = {
        res: compliance.insurance,
        insuranceValue: formik.values.healthInsuranceCode,
        handleChange: formik.handleChange,
        click:(value) => setCompliance((prev) => {
            return { ...prev, insurance: value }
        }),
        prevPage: prevPage,
    }
    
    const housingProps = {
        res: compliance.housing,
        housingValue: formik.values.nsitfCode,
        handleChange: formik.handleChange,
        click: (value) => setCompliance((prev) => {
            return { ...prev, housing: value }
        }),
        prevPage: prevPage,
    }

    const accountDetails = {
        businessAccountNumber: formik.values.businessAccountNumber,

        handleChange: formik.handleChange,
        bankDetails: bankDetails,
        getbankcode:(val,name)=> setBankDetails((state)=> {return {...state, code:val, name:name}} ),
        getaccountname: (val) => setBankDetails((state) => { return { ...state, owner: val } }),
        values: formik.values,
        handleSubmit: formik.handleSubmit
    }

    return (
        <RegistrationContext.Provider value={{page, ChangePage}}>
            <TermsAndCondition />
        
        <BusinessCategory {...categoryDetails} />
            <FirstProfilePage {...firstProfile} />
            <SecondProfilePage {...about} />
            <ThirdProfilePage {...thirdProfile} />
            <BusinessContact  {...contact} />
            <Pension {...pensionProps} />
            <Insurance {...insuranceProps} />
            <NSITF {...housingProps} /> 
            <BankDetails  {...accountDetails} />
            {/* <CompleteRegistration {...accountDetails} /> */}
            </RegistrationContext.Provider>
        
        )
}



