import styled from 'styled-components'
import {Field} from 'formik'

const TextareaInput = styled(Field).attrs({as: "textarea"})`
    border: none;
    height: 25vh;
    resize: none;

    margin-top: 2vh;
    padding: 1.5vh;
    
    font-size: 1vw;
    letter-spacing: 0.1vw;
    line-height: 2vw;

    @media screen and (max-width: 425px) {
        padding: 1vh;
        font-size: 2vw;
        letter-spacing: 0.2vw;
        line-height: 4.5vw;
    }

    :focus {
        outline: none;
    }
`

export default TextareaInput