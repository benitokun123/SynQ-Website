import React from 'react';
import Introduction from "./Content/Introduction"
import CourseInfo from "./Content/CourseInfo"
import Members from "./Content/Members"
import SocialMedia from './Content/SocialMedia'
import {motion} from 'framer-motion'

const pageVariant = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}


function About() {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageVariant}>
            <Introduction />
            <CourseInfo />
            <Members />
            <SocialMedia />
        </motion.div>
    )
}

export default About