import React from 'react';
import styled from 'styled-components'
import Course from '../../Media Content/Course.webp'
import CoursePhone from '../../Media Content/CoursePhone.webp'

const InfoBox = styled.div`
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
`

const Text = styled.div`
    margin-left: 3vw;
    width: 50%;
    
    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    line-height: 2vw;
    text-align: justify;

    @media screen and (max-width: 425px) {
        font-size: 2.5vw;
        letter-spacing: 0.1vw;
        line-height: 4.5vw;
    }
`

const Pic = styled.div`
    margin-left: 3vw;
    margin-bottom: 5vh;
    margin-top: 6vh;

    width: 40%;
    border-radius: 5%;

    background-image: url(${Course});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 425px) {
        margin-left: 5vw;
        margin-bottom: 3vh;
        margin-top: 4vh;
        background-image: url(${CoursePhone});
    }
`

function CourseInfo() {
    return (
        <InfoBox>
            <Text>
                <h3>Our DJ Course</h3>
                <p>
                    In NUS DJ Collective, we value DJs who can handle any situation on the deck. 
                    When joining our DJ course, you will be taken back to the old time when 
                    DJs didn't have any visual DJ software and relied entirely on their 
                    musical sense.
                    <br/><br/>
                    Our course includes:
                    <br/>
                    <ul style={{paddingLeft: '2vw'}}>
                        <li>8 lessons covering fundamental DJing topics: song structure, beatmatching, 
                            transition, and song selection.
                        </li>
                        <li>
                            Free self-initiated practice sessions outside regular lesson.
                        </li>
                        <li>
                            Final evaluation for you to perform live with your favorite music.
                        </li>
                    </ul>
                </p>
            </Text>
            <Pic/>
        </InfoBox>
    )
}

export default CourseInfo