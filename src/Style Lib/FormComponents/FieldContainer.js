import styled from 'styled-components'

const FieldContainer = styled.div`
    margin-top: 3vh;
    margin-bottom: 5vh;
    padding: 10px;
    width: 40vw;
    background-color: rgba(20,20,20,0.1);
    border-radius: 3px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
        width: 60vw;
    }
`

export default FieldContainer