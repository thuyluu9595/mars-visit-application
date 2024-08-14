import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import TravelPreferencesForm from '../components/forms/TravelPreferencesForm';
import HealthSafetyForm from '../components/forms/HealthSafetyForm';
import NavigationButtons from '../components/NavigationButtons';
import ProgressIndicator from '../components/ProgressIndicator';
import { useRouter } from 'next/router';

// Validation schema for each step
const validationSchema = [
    Yup.object({
        fullName: Yup.string().required('Full Name is required'),
        dateOfBirth: Yup.date().required('Date of Birth is required'),
        nationality: Yup.string().required('Nationality is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().matches(
            /^\+?[1-9]\d{1,14}$/,
            'Phone number is not valid'
        ).required('Phone number is required'),
    }),
    Yup.object({
        departureDate: Yup.date().required('Departure Date is required'),
        returnDate: Yup.date().required('Return Date is required'),
        accommodation: Yup.string().required('Accommodation Preference is required'),
        specialRequests: Yup.string(),
    }),
    Yup.object({
        healthDeclaration: Yup.string().required('Health Declaration is required'),
        emergencyContact: Yup.string().required('Emergency Contact is required'),
        medicalConditions: Yup.string(),
    }),
];

// Initial values for the form
const initialValues = {
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: '',
};

export default function ApplicationForm() {
    const [step, setStep] = useState(0);
    const router = useRouter();

    const isLastStep = step === validationSchema.length - 1;

    const nextStep = () => setStep((prev) => Math.min(prev + 1, validationSchema.length - 1));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            console.log('Submitting', values);
            actions.setSubmitting(true);
            router.push('/success'); // Redirect to success page
        } else {
            nextStep();
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-3/4 bg-white p-8 rounded-lg shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Mars Visit Application</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema[step]}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <ProgressIndicator currentStage={step + 1} totalStages={validationSchema.length}/>
                            {step === 0 && <PersonalInfoForm isSubmitting={isSubmitting}/>}
                            {step === 1 && <TravelPreferencesForm/>}
                            {step === 2 && <HealthSafetyForm/>}
                            <NavigationButtons
                                step={step}
                                prevStep={prevStep}
                                isLastStep={isLastStep}
                                isSubmitting={isSubmitting}
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    );
}
