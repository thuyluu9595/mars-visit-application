import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { travelPreferencesValidationSchema } from "@/utils/validationSchema";

const TravelPreferencesForm = ({ initialValues, onNext, onPrevious }) => {
    const validationSchema = Yup.object({
        departureDate: Yup.date().required('Departure Date is required'),
        returnDate: Yup.date().required('Return Date is required'),
        accommodation: Yup.string().required('Accommodation Preference is required'),
        specialRequests: Yup.string(),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={travelPreferencesValidationSchema}
            onSubmit={(values) => {
                onNext(values);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="departureDate">Departure Date</label>
                        <Field type="date" name="departureDate" />
                        <ErrorMessage name="departureDate" component="div" />
                    </div>
                    <div>
                        <label htmlFor="returnDate">Return Date</label>
                        <Field type="date" name="returnDate" />
                        <ErrorMessage name="returnDate" component="div" />
                    </div>
                    <div>
                        <label htmlFor="accommodation">Accommodation Preference</label>
                        <Field as="select" name="accommodation">
                            <option value="">Select</option>
                            <option value="spaceHotel">Space Hotel</option>
                            <option value="martianBase">Martian Base</option>
                        </Field>
                        <ErrorMessage name="accommodation" component="div" />
                    </div>
                    <div>
                        <label htmlFor="specialRequests">Special Requests or Preferences</label>
                        <Field as="textarea" name="specialRequests" />
                        <ErrorMessage name="specialRequests" component="div" />
                    </div>
                    <button type="button" onClick={onPrevious}>
                        Previous
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                        Next
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default TravelPreferencesForm;
