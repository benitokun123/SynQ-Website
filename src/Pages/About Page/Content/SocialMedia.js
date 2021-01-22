import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import BlackText from 'Style Lib/BlackText'

const IconBox = styled.div`
    display: flex;
    justify-content: space-around;
    
    padding-top: 5vh;
    padding-bottom: 5vh;
`

const Facebook = styled.a`
    background-color: white;
    color: #3B5998;
    text-align: center;
`
const Instagram = styled.a`
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    border-radius: 20%;
    color: white;

    padding-left: 4px;
    padding-right: 4px;
`

const Linkedin = styled.a`
    background-color: white;
    color: #007bb5;
    text-align: center;
` 

function SocialMedia() {
    return (
        <div>
            <BlackText>
                <h3>Follow Us</h3>
            </BlackText>
            <IconBox>
                <Facebook href="https://www.facebook.com/synqdjs/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} size="4x"/>
                </Facebook>

                <Instagram href="https://www.instagram.com/nussynq/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="4x"/>
                </Instagram>

                <Linkedin href="https://linkedin.com/company/nus-synq" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size="4x"/>
                </Linkedin>
            </IconBox>
        </div>
    )
} 

export default SocialMedia