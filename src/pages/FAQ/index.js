import React from 'react'
import {motion} from 'framer-motion'
import './index.scss'
import QAList from './data/QAList'
import QACard from './components/QACard'

const pageAnimations = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

function FAQ() {
    return (
        <motion.div {...pageAnimations} className="FAQ">
            {QAList.map(qa => <QACard key={qa.question} question={qa.question} answer={qa.answer}/>)}
            
            <div className="Message">
                Still have questions? Email us at &nbsp;
                <a href="mailto:nussynq@gmail.com" target="_blank" rel="noreferrer">
                    nusssynq@gmail.com 
                </a>
                &nbsp; or send a message to our &nbsp;
                <a href="https://www.instagram.com/nussynq/" target="_blank" rel="noreferrer">
                    Instagram
                </a>
                &nbsp;
            </div>
        </motion.div>
    )
}

export default FAQ