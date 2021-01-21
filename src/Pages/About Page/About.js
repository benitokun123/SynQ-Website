import React from 'react';
import Introduction from "./Content/Introduction"
import CourseInfo from "./Content/CourseInfo"
import Members from "./Content/Members"

function About() {
    return (
        <div>
            <Introduction />
            <CourseInfo />
            <Members />
        </div>
    )
}

export default About