import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
    background-color: rgb(20,20,20,0.3);
    height: 50vh;
    color: white;
    padding-top: 5vh;
    padding-left: 3vw;

    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    line-height: 2vw;

    @media screen and (max-width: 425px) {
        font-size: 2.5vw;
        letter-spacing: 0.1vw;
        line-height: 4.5vw;
    }
`


function Members() {
    return (
        <Box>
            <h3>Our DJs</h3>
        </Box>
    )
}

export default Members