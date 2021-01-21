import styled from 'styled-components'

const WhiteText = styled.div`
    width: 50%;
    margin: 3vh 3vw 3vh 3vw;
    
    color: white;
    
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

export default WhiteText