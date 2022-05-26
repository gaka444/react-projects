import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const RadioButtons = (props) => {
    const {name,label,options,...rest} = props;
    return(
        <div className='form-control'>
           <label>{label}</label> 
           <Field name={name} {...rest} >
               {
                   ({field}) => {
                       return (
                           options.map(({key,value}) =>  (
                               <React.Fragment key={value}>
                                <input type="radio" id={value} {...field} value={value} checked={value === field.value}/>
                                <label htmlFor={value}>{key}</label>
                               </React.Fragment>
                           ))
                       )
                   }
               }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioButtons;