import React from 'react';
import styled from 'styled-components'
import memberList from 'Local Data/memberList'
import MemberCard from './MemberCard'
import WhiteText from 'Style Lib/WhiteText'

const Box = styled.div`
    background-color: rgb(20,20,20,0.3);
    height: auto;
    padding-top: 3vh;
`

const MemberBox = styled.div`
    padding-bottom: 5vh;
    padding-left: 3vw;
    display: flex;
    flex-wrap: wrap;
`

function Members() {
    const memberCards = memberList.map( (member) => 
        <MemberCard {...member} />
    )
    
    return (
        <Box>
            <WhiteText>
                <h3>Our Committees</h3>
            </WhiteText>
            <MemberBox>
                {memberCards}
            </MemberBox>
        </Box>
    )
}

export default Members