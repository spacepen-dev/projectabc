import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('First name is required'),
    // lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email address is required').email('must be valid'),
    password: Yup.string().required('Password is required').min(6, 'should be more than 6 charaters'),
    phoneNumber: Yup.string().required('Phone number is required')

})

export const EmailLoginSchema = Yup.object().shape({
    email_phone: Yup.string().required('Email address is required'),


})

export const PasswordLoginSchema = Yup.object().shape({
    password: Yup.string().required('Password is required').min(6, 'should be more than 6 charaters')

})