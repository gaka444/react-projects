import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from './FormikControl';
import * as Yup from 'yup';

const RegistrationForm = () => {
    const option = [
        {key: 'Email', value:'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'}
    ]

    const initialValues = {
        email:'',
        password:'',
        confirmPassword:'',
        modeOfContact:'',
        phone:''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),''], 'Passwords must match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact',{
            is: 'telephonemoc',
            then : Yup.string().required('Required')
        })
    })

    const onSubmit = values => {
        console.log(values);
    }

    return(
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => (
                    <Form>
                        <FormikControl control="input" type="text" label="Email" name="email" />
                        <FormikControl control="input" type="password" label="Password" name="password" />
                        <FormikControl control="input" type="password" label="Confirm Password" name="confirmPassword" />
                        <FormikControl control="radio" options={option} label="Mode of Contact" name="modeOfContact" />
                        <FormikControl control="input" type="text" label="Phone Number" name="phone" />
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default RegistrationForm;