import React from 'react';
import SignUpIntro from './Content/SignUpIntro'
import SignUpForm from './Content/SignUpForm'
import FormContainer from 'Style Lib/FormComponents/FormContainter'

function SignUp() {
    return (
        <div>
            <SignUpIntro/>
            <FormContainer>
                <SignUpForm/>
            </FormContainer>
        </div>
    )
}

export default SignUp