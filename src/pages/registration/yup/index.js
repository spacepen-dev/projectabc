import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    // lastName: Yup.string().required('Last name is required'),
    emailAddress: Yup.string().required('Email address is required').email('Email must be valid'),
    password: Yup.string().required('Password is required').min(8, 'should be more than 6 charaters'),
    phoneNumber: Yup.string().required('Phone number is required')

})

export const EmailLoginSchema = Yup.object().shape({
    email_phone: Yup.string().required('Email address is required'),


})

export const PasswordLoginSchema = Yup.object().shape({
    password: Yup.string().required('Password is required').min(6, 'should be more than 6 charaters')

})


export const BusinessRegistrationSchema = Yup.object().shape({
    businessName:  Yup.string().required('Business name is required'),
               
                registrationNumber:  Yup.string().required('Business registration number is required'),
                // companyLogo:  Yup.string().required(),
                about:  Yup.string().required('Tell us about your business'),
                // state:  Yup.string().required(),
                // lga:  Yup.string().required(),
                // stateTin:  Yup.string().required(),
                // officeAddress:  Yup.string().required(),
                // emailAddress:  Yup.string().required(),
                // phoneNumber: Yup.string().required(),
                // website: Yup.string().required(),
                // businessCategory:  Yup.string().required(),
                // pensionCompliance:  Yup.string().required(),
                // pensionCode:  Yup.string().required(),
                // healthInsuranceCompliance:  Yup.string().required(),
                // healthInsuranceCode:  Yup.string().required(),
                // nsitfCompliance:  Yup.string().required(),
                // nsitfCode:  Yup.string().required(),
                // businessBankName:  Yup.string().required(),
                // businessBankAccountName:  Yup.string().required(),
                // businessAccountNumber:  Yup.string().required(),
                // businessBankCode: Yup.string().required()
})