import React from 'react';
import { Formik, FormikContext, useFormik } from 'formik';
import * as Yup from 'yup';
const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log(values);
}

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}

const validationSchema =  Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email id').required('Required'),
    channel: Yup.string().required('Required')
})

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" {...formik.getFieldProps('name')}/>
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id="email" name="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input type="text" id="channel" name="channel" {...formik.getFieldProps('channel')}/>
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm;