import React from 'react'
import './index.scss'
import CheckBox from '../CheckBox'

function CheckBoxGroup({name, options, description}) {
    return (
        <div className="CheckBoxGroup">
            {description}
            <div className="OptionList">
                {options.map(option => <CheckBox name={name} description={option} value={option}/>)}
            </div>
        </div>
    )
}

export default CheckBoxGroup