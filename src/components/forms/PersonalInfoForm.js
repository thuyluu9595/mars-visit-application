import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { personalInfoValidationSchema} from "@/utils/validationSchema";

const PersonalInfoForm = ({ initialValues, onNext }) => {
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full Name is required'),
        dateOfBirth: Yup.date().required('Date of Birth is required'),
        nationality: Yup.string().required('Nationality is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={personalInfoValidationSchema}
            onSubmit={(values) => {
                onNext(values);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <Field type="text" name="fullName" />
                        <ErrorMessage name="fullName" component="div" />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field type="date" name="dateOfBirth" />
                        <ErrorMessage name="dateOfBirth" component="div" />
                    </div>
                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <Field type="text" name="nationality" />
                        <ErrorMessage name="nationality" component="div" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="phone" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Next
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default PersonalInfoForm;
