import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;

    text-decoration: none;
    text-align: center;
    color:#fffafb;

    padding: 0 10px 0 10px;
    border-radius: 3px;
    
    transition: 0.5s;
    :hover {
        background-color: #fffafb;
        color: #090001;
    };
`

const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 10vh;

    background-color: #090001;
    color:#fffafb;
`

const Title = styled.h2`
    position: absolute;
    left: 10px;
    top: 0px;
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