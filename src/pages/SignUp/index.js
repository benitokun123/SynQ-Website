import React from 'react';
import {motion} from 'framer-motion';
import './index.scss'

import SignUpIntro from './components/SignUpIntro'
import SignUpForm from './components/SignUpForm'

const pageAnimations = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

function SignUp() {
    return (
        <motion.div {...pageAnimations}>
            <SignUpIntro/>
            <SignUpForm/>
        </motion.div>
    )
}

export default SignUp