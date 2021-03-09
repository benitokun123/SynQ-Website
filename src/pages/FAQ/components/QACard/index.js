import React, {useState} from 'react';
import './index.scss';
import {faCaretSquareRight, faCaretSquareDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function QACard({question, answer}) {
    const [expand, setExpand] = useState(false);
    
    return (
        <div className="QACard">
            <div className="Question" onClick={() => setExpand(e => !e)}>
                <FontAwesomeIcon icon={expand? faCaretSquareDown : faCaretSquareRight}/>
                &nbsp;
                {question}
            </div>
            
            <div className="Answer" style={expand? {maxHeight: "10rem", opacity:1} : {maxHeight: 0, opacity:0}}
            >
                <div style={{padding: "1rem"}}>
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default QACard