import {Field} from 'formik'
import styled from 'styled-components'

const TextInput = styled(Field).attrs({type: "text"})`
    border: none;
    border-bottom: 2px solid grey;
    padding: 1.5vh;
    margin-top: 2vh;
    
    font-size: 1vw;
    letter-spacing: 0.1vw;
    line-height: 2vw;

    @media screen and (max-width: 425px) {
        padding: 1vh;
        font-size: 2vw;
        letter-spacing: 0.2vw;
        line-height: 4.5vw;
    }

    transition: 0.2s ease;

    :focus {
        outline: none;
        border-bottom: 5px solid lightblue;
    }

    --webkit-transform: translateZ(0);
`

export default TextInput