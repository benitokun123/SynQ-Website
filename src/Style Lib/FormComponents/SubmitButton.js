import styled from 'styled-components'

const SubmitButton = styled.button.attrs({type: "submit"})`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    
    padding: 5px 8px 5px 8px;

    font-size: 1.5vw;
    letter-spacing: 0.1vw;

    @media screen and (max-width: 425px) {
        font-size: 2.5vw;
        letter-spacing: 0.2vw;
    }

    transition: 0.2s ease;

    border: 2px solid lightblue;

    :hover {
        background-color: lightblue;
        outline: none;
    }    
    :focus {
        outline: none;
    }

    --webkit-transform: translateZ(0);
`
export default SubmitButton