import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF, faLinkedinIn, faGoogle} from '@fortawesome/free-brands-svg-icons'
import BlackText from 'Style Lib/BlackText'

const IconBox = styled.div`
    display: flex;
    justify-content: space-around;
    
    padding-top: 5vh;
    padding-bottom: 5vh;
`

const Icon = styled.a`
    width: 10vw;
    height: 10vh;
    color: white;
    
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 425px) {
        width: 10vh;
        height: 10vh;
    }
`

const Facebook = styled(Icon)`
    background-color: #3B5998;
`
const Instagram = styled(Icon)`
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
`
const Google = styled(Icon)`
    background-color: #dd4b39;
` 

const Linkedin = styled(Icon)`
    background-color: #007bb5;
` 

function SocialMedia() {
    return (
        <div>
            <BlackText>
                <h3>Follow Us</h3>
            </BlackText>
            <IconBox>
                <Facebook href="https://www.facebook.com/synqdjs/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} size="3x"/>
                </Facebook>

                <Instagram href="https://www.instagram.com/nussynq/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                </Instagram>

                <Google href="mailto:nussynq@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faGoogle} size="3x"/>
                </Google>

                <Linkedin href="https://linkedin.com/company/nus-synq" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                </Linkedin>
            </IconBox>
        </div>
    )
} 

export default SocialMedia