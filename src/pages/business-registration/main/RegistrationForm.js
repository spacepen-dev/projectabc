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
import CompleteRegistration from '../finish';




export const RegistrationContext = createContext();

export default function RegistraionFormController() {

    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [compliance, setCompliance] = useState({ pension: '', insurance: '', housing: '' });

    function ChangePage() {
        setPage((prev) => prev + 1);
    }



    const formik = useFormik({
        initialValues: {
            
                agreementSigned: 'Yes',
                // user_token: 9f363526b7d5e62f29b3d890341dac84e1160e04,
                businessRegistrationType: name,
            
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
                businessBankName: '',
                businessBankAccountName: '',
                businessAccountNumber: '',
                businessBankCode:''
            
           
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
        registrationTouched: formik.touched.registrationNumber
    }

    const about = {
        value:formik.values.about,
        handleChange: formik.handleChange,
     
    }

    const thirdProfile = {
        stateValue: formik.values.state,
        lgaValue: formik.values.lga,
        tinValue: formik.values.stateTin,
        handleChange: formik.handleChange,
    
    
    }

    const contact = {
        phone: formik.values.phoneNumber,
        website: formik.values.website,
        email: formik.values.emailAddress,
        address: formik.values.officeAddress,
        handleChange: formik.handleChange,
        // error: formik.errors.phoneNumber,

    
    }

    const pensionProps = {
        res: compliance.pension,
        pensionValue: formik.values.pensionCode,
        handleChange: formik.handleChange,
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
        })
    }

    const housingProps = {
        res: compliance.housing,
        housingValue: formik.values.nsitfCode,
        handleChange: formik.handleChange,
        click: (value) => setCompliance((prev) => {
            return { ...prev, housing: value }
        })
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
            <BankDetails />
            <CompleteRegistration/>
            </RegistrationContext.Provider>
        
        )
}



