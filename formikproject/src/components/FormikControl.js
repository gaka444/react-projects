import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';
import Datepicker from './Datepicker';

const FormikControl = props => {
    const {control} = props;
    switch(control){
        case 'input':
            return <Input {...props} />
        case 'textarea':
            return <Textarea {...props}/>
        case 'select':
            return <Select {...props} />
        case 'radio':
            return <RadioButtons {...props} />
        case 'checkbox':
            return <CheckboxGroup {...props} />
        case 'date':
            return <Datepicker {...props} />
        default :
            return null;
    }
}

export default FormikControl;