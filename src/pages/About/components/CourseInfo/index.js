import React from 'react';
import "./index.scss";

function CourseInfo() {
    return (
        <div className="CourseInfo">
            <div className="CourseContent">
                <h4>Our DJ Course</h4>
                <p>
                    In NUS DJ Collective, we value DJs who can handle any situation on the deck. 
                    When joining our DJ course, you will be taken back to the old time when 
                    DJs didn't have any visual DJ software and relied entirely on their 
                    musical sense.
                    <br/><br/>
                    Our course includes:
                    <br/>
                    <ul style={{paddingLeft: '1rem', listStyle: "square"}}>
                        <li>
                            8 lessons covering fundamental DJing topics: song structure, beatmatching, 
                            transition, and song selection.
                        </li>
                        <li>
                            Free self-initiated practice sessions outside regular lesson.
                        </li>
                        <li>
                            Final evaluation for you to perform live with your favorite music.
                        </li>
                    </ul>
                    Duration: every first semester of NUS academic year<br/>
                    Course fee: <h3 style={{color: 'green', display: 'inline'}}>S$210</h3>
                </p>
            </div>
            <div className="CoursePic"/>
        </div>
    )
}

export default CourseInfo