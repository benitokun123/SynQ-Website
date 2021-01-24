import styled from 'styled-components'

const ErrorText = styled.div`
    color: red;
    
    font-size: 1vw;
    letter-spacing: 0.1vw;
    line-height: 2vw;
    text-align: justify;

    @media screen and (max-width: 425px) {
        font-size: 2vw;
        letter-spacing: 0.2vw;
        line-height: 4.5vw;
    }
`

export default ErrorText