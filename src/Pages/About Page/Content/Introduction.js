import React from 'react';
import styled from 'styled-components'
import AboutClub from 'Media Content/AboutClub.webp'
import AboutClubPhone from 'Media Content/AboutClubPhone.webp'
import WhiteText from 'Style Lib/WhiteText'

const IntroBox = styled.div`
    height: 90vh;

    ::after{
        content: "";
        background-color: rgba(0,0,0,0.55);
        background-image: url(${AboutClub});
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -2;

        @media screen and (max-width: 425px) {
            background-image: url(${AboutClubPhone});
        }
    }
`

function Introduction() {
    return (
        <IntroBox>
            <WhiteText>
                <h3>About Us</h3>
                <p> NUS DJ Collective was founded in 2003 and is known for their electric DJ performances around campus 
                    and in Singapore's entertainment scene from places such as
                    <a href="https://zoukclub.com/" target="_blank" rel="noreferrer"> Zouk</a>, 
                    <a href="https://www.cherrydiscotheque.com/" target="_blank" rel="noreferrer"> Cherry Discotheque</a>, 
                    <a href="https://www.wan-night.com/" target="_blank" rel="noreferrer"> WAN</a>, etc.
                    <br/><br/>
                    NUS DJ Collective aims to empower music enthusiasts and whoever with an interest for DJing; 
                    serving as a platform for them to get first hand experience in DJing in the local DJing Scene.
                    <br/><br/>
                    Through our annual basic course, bonding sessions and gigs all around the country, 
                    those who came for the music; stayed for the family.
                </p>
            </WhiteText>
        </IntroBox>
    )
}

export default Introduction