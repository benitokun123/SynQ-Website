import React from 'react'
import styled from 'styled-components'
import IntroBox from 'Style Lib/IntroBox'
import SignUpBg from 'Media Content/SignUpBg.jpg'
import SignUpBgPhone from 'Media Content/SignUpBgPhone.jpg'
import WhiteText from 'Style Lib/WhiteText'

const CenterWhiteText = styled(WhiteText)`
    margin: 0;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    line-height: 1vw;
`

function SignUpIntro() {
    return (
        <IntroBox image={SignUpBg} imagePhone={SignUpBgPhone}>
            <CenterWhiteText>
                <h3>Your DJing journey begins</h3>
                <h1>HERE</h1>
            </CenterWhiteText>
        </IntroBox>
    )
}

export default SignUpIntro