import React from 'react';
import SignUpIntro from './Content/SignUpIntro'
import SignUpForm from './Content/SignUpForm'
import FormContainer from 'Style Lib/FormComponents/FormContainter'
import {motion} from 'framer-motion'

const pageVariant = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}

function SignUp() {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageVariant}>
            <SignUpIntro/>
            <FormContainer>
                <SignUpForm/>
            </FormContainer>
        </motion.div>
    )
}

export default SignUp