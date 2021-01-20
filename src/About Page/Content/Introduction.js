import React from 'react';
import styled from 'styled-components'
import AboutClub from '../../Media Content/AboutClub.webp'
import AboutClubPhone from '../../Media Content/AboutClubPhone.webp'

const Box = styled.div`
    height: 90vh;
    ::after{
        content: "";
        background-image: url(${AboutClub});
        background-size: cover;
        background-position: center;
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

    ::before{
        content: "";
        background-color: rgba(0,0,0,0.6);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }
`

const Text = styled.div`
    width: 50%;
    margin-top: 5vh;
    margin-left: 3vw;
    
    color: #fffafb;
    
    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    line-height: 2vw;
    text-align: justify;

    @media screen and (max-width: 425px) {
        font-size: 2.5vw;
        letter-spacing: 0.2vw;
        line-height: 4.5vw;
    }
`

function Introduction() {
    return (
        <Box>
            <Text>
                <h3>About Us</h3>
                <p> NUS DJ Collective was founded in 2003 and is known for their electric DJ performances around campus 
                    and in Singapore's entertainment scene from places such as
                    <a href="https://zoukclub.com/" target="_blank"> Zouk</a>, 
                    <a href="https://www.cherrydiscotheque.com/" target="_blank"> Cherry Discotheque</a>, 
                    <a href="https://www.wan-night.com/" target="_blank"> WAN</a>, etc.
                    <br/><br/>
                    NUS DJ Collective aims to empower music enthusiasts and whoever with an interest for DJing; 
                    serving as a platform for them to get first hand experience in DJing in the local DJing Scene.
                    <br/><br/>
                    Through our annual basic course, bonding sessions and gigs all around the country, 
                    those who came for the music; stayed for the family.
                </p>
            </Text>
        </Box>
    )
}

export default Introduction