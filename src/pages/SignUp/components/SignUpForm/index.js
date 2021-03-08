import React from 'react'
import './index.scss'

import {Formik, Form} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import TextInput from './components/TextInput'
import TextAreaInput from './components/TextAreaInput'
import CheckBox from './components/CheckBox'
import { useState } from 'react'

const phoneRegex = /[6|8|9]\d{7}|[6|8|9]\d{3}\s\d{4}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/g

const values = {
    submitDay: null,
    fullName: '',
    email: '',
    phoneNumber: '',
    preferedDate: '',
    selfIntro: '',
    consent: false
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
    preferedDate: yup.string()
                    .required("*Required"),
    consent: yup.bool()
                .oneOf([true], '*Terms and conditions must be accepted')
                .required('*Required')
})

function SignUpForm() {
    const [submitted, setSubmitted] = useState(false)
    
    return(
        <Formik
            initialValues={values}
            validationSchema={validate}
            onSubmit={(values, { setSubmitting }) => {
                values.submitDay = new Date().toISOString().slice(0,10)
    
                setTimeout(async () => {
                    setSubmitting(true)
                    
                    await axios.post("https://sheet.best/api/sheets/9970fa4b-6ffd-4a9b-a365-f806444e317d", values)
                    .then(res => console.log(res))
                    
                    setSubmitting(false)
                    setSubmitted(true)
                }, 400);
                
            }}
        >
            {formik => (
                <Form className="SignUpForm">
                    <div className="InputContainer">
                        <TextInput name="fullName" type="text" description="Full Name"/>
                        
                        <TextInput name="email" type="email" description="Email"/>
                        
                        <TextInput name="phoneNumber" type="text" description="Phone Number"/>

                        <TextInput name="preferedDate" type="text" description="Preferred Lesson Date (Mon, Wed, or Fri)"/>
                        
                        <TextAreaInput name="selfIntro" description="Tell us about yourself"/>
                        
                        <CheckBox name="consent" 
                                description="By checking this box, you are giving 
                                full consent to synQ collecting, using and/or disclosing your personal data  
                                for purposes in compliance with the PDPA 2012."/>
                        
                        <button type="submit">Submit</button> 
                        {formik.isSubmitting && <div className="msg">...Submitting</div>}
                        
                        {submitted && <div className="msg">Thank you for submitting!</div>}
                    </div>
                </Form>
            )}
            
            
        </Formik>
    )
}

export default SignUpForm
