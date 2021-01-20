import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    text-align: center;
    color:#fffafb;

    padding: 0 10px 0 10px;
    
    transition: 0.5s;
    :hover {
        background-color: #fffafb;
        color: #090001;
    };
`

const Nav = styled.div`
    display: grid;
    grid-template-columns: 70% 15% 15%;
    grid-template-rows: 100%;
    height: 10vh;
    font-size: 0.8rem;

    @media screen and (max-width: 425px) {
        font-size: 0.5rem;
    }

    background-color: #090001;
    color:#fffafb;
`

const Title = styled.h2`
    display: flex;
    align-items: center;
    margin-left: 3vw;
`

function Navbar() {
    return (
        <Nav>
            <Title>NUS DJ COLLECTIVE</Title>
            <StyledLink to="/"><h3>About</h3></StyledLink>
            <StyledLink to="/SignUp"><h3>Sign Up</h3></StyledLink>
        </Nav>
    )
}

export default Navbar