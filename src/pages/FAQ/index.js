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
        </motion.div>
    )
}

export default FAQ