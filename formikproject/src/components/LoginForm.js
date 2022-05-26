import { Formik, Form } from 'formik';
import React from 'react';
import FormikControl from './FormikControl';
import * as Yup from 'yup';

const LoginForm = () => {
    const initialValues = {
        email:'',
        password:''
    }

    const onSubmit = values => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email'),
        password: Yup.string().required('Required')
    })

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => (
                    <Form>
                        <FormikControl control="input" type="email" name="email" id="email" label="Email Id" />
                        <FormikControl control="input" type="password" name="password" id="password" label="Password"/>
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default LoginForm;