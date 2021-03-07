import React from 'react';
import './index.scss';
import {Field} from 'formik';

function TextAreaInput({name, description}) {
    return (
        <div className="TextAreaInput">
            <label htmlFor={name}></label>
            
            <Field name={name} as="textarea" placeholder={description} className="field"/>
        </div>
    )
}

export default TextAreaInput