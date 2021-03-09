import React from 'react';
import './index.scss';
import MemberCard from './components/MemberCard';
import memberList from './data/memberList';

function Members() {
    const memberCards = memberList.map(member => <MemberCard key={member.name} {...member}/>)
    
    return (
        <div className="Members">
            <h4>Our Committees</h4>
            <div className="MemberCardsContainer">
                {memberCards}
            </div>
        </div>
    )
}

export default Members