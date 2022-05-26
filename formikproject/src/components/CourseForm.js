import React from 'react';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import FormikControl from './FormikControl';

const CourseForm = () => {
    const checkboxOptions = [
        {key: 'HTML', value: 'html'},
        {key: 'CSS', value: 'css'},
        {key: 'Js', value: 'js'}
    ];

    const dropdownOption = [
        {key: 'Select a option', value: ''},
        {key: 'Angular', value: 'angular'},
        {key: 'Vue', value: 'vue'},
        {key: 'React', value: 'react'}
    ]

    const initialValues = {
        email:'',
        bio:'',
        course:'',
        skills:[],
        courseDate: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        courseDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = values => {
        console.log(values);
    }

    return (
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <FormikControl control="input" type="email" name="email" label="Email" />
                        <FormikControl control="textarea" name="bio" label="Bio" />
                        <FormikControl control="select" name="course" label="Course" options={dropdownOption} />
                        <FormikControl control="checkbox" name="skills" label="Skills" options={checkboxOptions} />
                        <FormikControl control="date" name="courseDate" label="Course Date" />
                        <button type="submit" disabled={!formik.isValid}>Submit</button> 
                    </Form>
                )
            }
        </Formik>
    )
}

export default CourseForm;