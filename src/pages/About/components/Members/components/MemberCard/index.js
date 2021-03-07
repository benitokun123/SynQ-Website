import React, { useState } from 'react';
import './index.scss';

function MemberCard(props) {
    const [slide, setSlide] = useState(false);
    
    return (
        <div className="MemberCard" tabIndex="0" onClick={() => setSlide(s => !s)}>
            <img src={props.pic} alt={props.name + " " + props.position}/>
            <div style={{bottom: slide? "0" : "100%"}}>
                <h5>{props.name}</h5>
                <h5>{props.position}</h5>
                <h5>{props.phone}</h5>
            </div>
        </div>
    )
}

export default MemberCard