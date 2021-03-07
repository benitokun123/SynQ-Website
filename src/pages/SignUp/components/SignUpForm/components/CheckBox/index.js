import React from 'react'
import './index.scss'
import { Field, ErrorMessage} from 'formik'

function CheckBox({name, value, description}) {
    return (
        <div className="CheckBox">
            <div>
                <label>
                    <Field
                            name={name} 
                            value={value} 
                            render={({field}) =><input {...field} type="checkbox"/>}
                    />
                    {description}
                </label>
            </div>
            
            <ErrorMessage name={name} 
                render={msg => <div className="error">{msg}</div>}
            />
        </div>
        
    )
}

export default CheckBox