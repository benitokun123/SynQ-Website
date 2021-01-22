import React from 'react';
import Introduction from "./Content/Introduction"
import CourseInfo from "./Content/CourseInfo"
import Members from "./Content/Members"
import SocialMedia from './Content/SocialMedia'

function About() {
    return (
        <div>
            <Introduction />
            <CourseInfo />
            <Members />
            <SocialMedia />
        </div>
    )
}

export default About