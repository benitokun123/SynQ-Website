import React from 'react';
import {motion, transform} from 'framer-motion';

import Introduction from './components/Introduction';
import CourseInfo from './components/CourseInfo';
import Members from './components/Members'

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

function About() {
    return (
        <motion.div {...pageAnimations}>
            <Introduction />
            <CourseInfo/>
            <Members />
        </motion.div>
    )
}

export default About