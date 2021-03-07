import React from 'react';
import './index.scss';
import {Field, ErrorMessage} from 'formik';

function TextInput({name, type, description}) {
    return (
        <div className="TextInput">
            <label htmlFor={name}></label>
            
            <Field name={name} type={type} placeholder={description} className="field"/>
            
            <ErrorMessage name={name} 
                render={msg => <div className="error">{msg}</div>}
            />
        </div>
    )
}

export default TextInput