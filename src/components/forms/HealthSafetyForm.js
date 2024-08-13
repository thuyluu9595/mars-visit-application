import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const HealthSafetyForm = ({ initialValues, onNext, onPrevious }) => {
    const validationSchema = Yup.object({
        healthDeclaration: Yup.boolean().required('Health Declaration is required'),
        emergencyContact: Yup.string().required('Emergency Contact Information is required'),
        medicalConditions: Yup.string(),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                onNext(values);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="healthDeclaration">Health Declaration</label>
                        <Field as="select" name="healthDeclaration">
                            <option value="">Select</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Field>
                        <ErrorMessage name="healthDeclaration" component="div" />
                    </div>
                    <div>
                        <label htmlFor="emergencyContact">Emergency Contact Information</label>
                        <Field type="text" name="emergencyContact" />
                        <ErrorMessage name="emergencyContact" component="div" />
                    </div>
                    <div>
                        <label htmlFor="medicalConditions">Any Medical Conditions (if applicable)</label>
                        <Field as="textarea" name="medicalConditions" />
                        <ErrorMessage name="medicalConditions" component="div" />
                    </div>
                    <button type="button" onClick={onPrevious}>
                        Previous
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default HealthSafetyForm;
