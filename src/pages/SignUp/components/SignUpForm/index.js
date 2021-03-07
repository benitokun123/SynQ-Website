import React from 'react'
import './index.scss'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'
import TextInput from './components/TextInput'
import TextAreaInput from './components/TextAreaInput'
import CheckBox from './components/CheckBox'

const phoneRegex = /[6|8|9]\d{7}|[6|8|9]\d{3}\s\d{4}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/g

const values = {
    fullName: '',
    email: '',
    phoneNumber: '',
    preferedDate: [],
    selfIntro: '',
    consent: null
}

const validate = yup.object({
    fullName: yup.string()
                .max(50, '*Must be less than 50 characters')
                .required('*Required'),
    email: yup.string()
                .email('*Invalid email address')
                .required('*Required'),
    phoneNumber: yup.string()
                    .matches(phoneRegex, '*Must be 8-digit Singapore phone number')
                    .required('*Required'),
    consent: yup.bool()
                .oneOf([true], '*Terms and conditions must be accepted')
                .required('*Required')
})

function SignUpForm() {
    return(
        <Formik
            initialValues={values}
            validationSchema={validate}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
            }}
        >
            <Form className="SignUpForm">
                <div className="InputContainer">
                    <TextInput name="fullName" type="text" description="Full Name"/>
                    
                    <TextInput name="email" type="email" description="Email"/>
                    
                    <TextInput name="phoneNumber" type="text" description="Phone Number"/>
                    
                    <TextAreaInput name="selfIntro" description="Tell us about yourself"/>
                    
                    <CheckBox name="consent" 
                            description="By checking this box, you are giving 
                            full consent to synQ collecting, using and/or disclosing your personal data  
                            for purposes in compliance with the PDPA 2012."/>
                    
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default SignUpForm
