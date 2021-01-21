import React from 'react'
import styled from 'styled-components'
import WhiteText from 'Style Lib/WhiteText'

const Box = styled.div`
    position: relative;
    width: 21.25vw;
    height: 21.25vw;
    margin-right: 2.5vw;
    margin-bottom: 5vh;

    overflow: hidden;

    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;

    -webkit-transform: translateZ(0);

    @media screen and (max-width: 425px) {
        width: 45.5vw;
        height: 45.5vw;
    }

    :hover .title {
        bottom: 0;
    }
`

const Title = styled(WhiteText)`
    width: 100%;
    height: 100%;
    margin: 0;
    
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;

    line-height: 1vh;

    position: absolute;
    bottom: 100%;

    background-color: rgb(0,0,0,0.4);
    transition: 0.5s ease;
    -webkit-transform: translateZ(0);
`

function MemberCard(props) {
    return (
        <Box src={props.pic}>
            <Title className="title">
                <h5>{props.position}</h5>
                <h3>{props.name}</h3>
            </Title>
        </Box>
    )
}

export default MemberCard