import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'
import FieldContainer from 'Style Lib/FormComponents/FieldContainer'
import ErrorText from 'Style Lib/FormComponents/ErrorText'
import TextInput from 'Style Lib/FormComponents/TextInput'
import TextAreaInput from 'Style Lib/FormComponents/TextAreaInput'
import SubmitButton from 'Style Lib/FormComponents/SubmitButton'

const phoneRegex = /[6|8|9]\d{7}|[6|8|9]\d{3}\s\d{4}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/g

const values = {
    fullName: '',
    email: '',
    phoneNumber: '',
    preferedDate: [],
    favoriteMusic: ''
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
                    .required('*Required')
})

function SignUpForm() {
    return (
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
            <Form>
                <FieldContainer>
                    <label htmlFor="fullName">Full Name</label>
                    <TextInput name="fullName"/>
                    <ErrorText>
                        <ErrorMessage name="fullName"/>
                    </ErrorText>
                </FieldContainer>

                <FieldContainer>
                    <label htmlFor="email">Email</label>
                    <TextInput name="email" type="text"/>
                    <ErrorText>
                        <ErrorMessage name="email" />
                    </ErrorText> 
                </FieldContainer>

                <FieldContainer>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <TextInput name="phoneNumber" type="text"/>
                    <ErrorText>
                        <ErrorMessage name="phoneNumber" />
                    </ErrorText>
                </FieldContainer>
                
                <FieldContainer>
                    <label htmlFor="preferedDate">Preferred Lesson Date</label>
                    <label>
                        <Field name="preferedDate" type="checkbox" value="Mon"/>
                        Monday
                    </label>
                    <label>
                        <Field name="preferedDate" type="checkbox" value="Wed"/>
                        Wednesday
                    </label>
                    <label>
                        <Field name="preferedDate" type="checkbox" value="Fri"/>
                        Friday
                    </label>
                </FieldContainer>
                
                <FieldContainer>
                    <label htmlFor="favoriteMusic">Share with us about your favorite music</label>
                    <TextAreaInput name="favoriteMusic"/>
                </FieldContainer>

                <SubmitButton type="submit">Submit</SubmitButton>
                <br/><br/>
            </Form>
        </Formik>
    )
}

export default SignUpForm