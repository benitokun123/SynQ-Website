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

    position: absolute;
    bottom: 100%;

    background-color: rgb(0,0,0,0.4);
    transition: 0.5s ease;
`

function MemberCard(props) {
    return (
        <Box src={props.pic}>
            <Title className="title">
                <h5>{props.position}</h5>
                <h4>{props.name}</h4>
            </Title>
        </Box>
    )
}

export default MemberCard