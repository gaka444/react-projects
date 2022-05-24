import React,{useState} from 'react';
import { ErrorMessage, Form, Formik, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneno: ['', ''],
    phNumbers: ['']
}

const savedValues = {
    name: 'vishwas',
    email: 'v@example.com',
    channel: 'codevolution',
    comment: '',
    address: '221b baker street',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneno: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values,onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
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

const validateComments = value => {
    let error;
    if (!value)
        error = 'Required';
    return error;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email id').required('Required'),
    channel: Yup.string().required('Required')
})

const YoutubeForm = () => {
    const [formValues, setFormValues] = useState(null)
    return (
        <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={formValues || initialValues} enableReinitialize>
            {
                formik => {
                    return (
                        <Form>
                            <div className='form-control'>
                                <label htmlFor="name">Name</label>
                                <Field type="text" id="name" name="name" />
                                <ErrorMessage name="name" component={TextError} />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='email'>Email</label>
                                <Field type="email" id="email" name="email" />
                                <ErrorMessage name="email">
                                    {(errmsg) => {
                                        return (<div className='error'>{errmsg}</div>)
                                    }}
                                </ErrorMessage>
                            </div>
                            <div className='form-control'>
                                <label htmlFor='comment'>comment</label>
                                <Field as="textarea" type="text" validate={validateComments} id="comment" name="comment" />
                                <ErrorMessage name="comment" component={TextError} />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='channel'>Channel</label>
                                <Field type="text" id="channel" name="channel" />
                                <ErrorMessage name="channel" />
                            </div>

                            <div className='form-control'>
                                <label htmlFor="address">Address</label>
                                <Field name="address">
                                    {(props) => {
                                        const { field, form, meta } = props;
                                        return (<div>
                                            <input type="text" id="address" {...field} />
                                            {meta.touched && meta.error ? <div className='error'>Required</div> : null}
                                        </div>)
                                    }}
                                </Field>
                            </div>

                            <div className='form-control'>
                                <label htmlFor='facebook'>Facebook</label>
                                <Field type="text" id="facebook" name="social.facebook" />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='twitter'>Twitter</label>
                                <Field type="text" id="twitter" name="social.twitter" />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='primaryph'>Primary phone no</label>
                                <Field type="text" id="primaryph" name="phoneno[0]" />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='secondaryph'>Secondary phone no</label>
                                <Field type="text" id="secondaryph" name="phoneno[1]" />
                            </div>

                            <div className='form-control'>
                                <label>List of Phone numbers</label>
                                <FieldArray name='phNumbers'>
                                    {(FieldItem) => {
                                        const { form, push, remove } = FieldItem;
                                        const { values } = form;
                                        const { phNumbers } = values;
                                        return (
                                            <div>
                                                {phNumbers.map((no, index) => {
                                                    return (<div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {index > 0 &&
                                                            <button type="button" onClick={() => remove(index)}>-</button>
                                                        }
                                                        <button type="button" onClick={() => push('')}>+</button>
                                                    </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    }}
                                </FieldArray>
                            </div>
                            {/* <button type="button" onClick={() => formik.validateForm('comment')}>Validate Comment</button>
                            <button type="button" onClick={() => formik.validateForm()}>Validate Fields</button>
                            <button type="button" onClick={() => formik.setTouched({
                                name: true,
                                comment: true,
                                email: true,
                                channel: true
                            })}>Touch Fields</button>
                            <button type="button" onClick={() => formik.setFieldTouched('comment')}>Touch Comment</button> */}
                            <button type="button" onClick={() => setFormValues(savedValues)}>Load Values</button>
                            <button type="reset">Reset</button>
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default YoutubeForm;