import { render, screen, fireEvent } from '@testing-library/react';
import { Formik } from 'formik';
import validationSchema from '../utils/validationSchema'; // adjust the path as needed
import PersonalInfoForm from '../components/forms/PersonalInfoForm';

describe('PersonalInfoForm Validation', () => {
    const initialValues = {
        fullName: '',
        dateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
    };

    const renderForm = (values = initialValues) => {
        return render(
            <Formik
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={jest.fn()}
            >
                {({ isSubmitting }) => <PersonalInfoForm isSubmitting={isSubmitting} />}
            </Formik>
        );
    };

    test('should display required error messages when inputs are empty', async () => {
        renderForm();

        fireEvent.submit(screen.getByRole('button', { name: /next/i }));

        expect(await screen.findByText(/full name is a required field/i)).toBeInTheDocument();
        expect(await screen.findByText(/date of birth is a required field/i)).toBeInTheDocument();
        expect(await screen.findByText(/nationality is a required field/i)).toBeInTheDocument();
        expect(await screen.findByText(/email is a required field/i)).toBeInTheDocument();
        expect(await screen.findByText(/phone is a required field/i)).toBeInTheDocument();
    });

    test('should display an error for invalid email', async () => {
        renderForm({
            ...initialValues,
            email: 'invalidemail'
        });

        fireEvent.submit(screen.getByRole('button', { name: /next/i }));

        expect(await screen.findByText(/email must be a valid email/i)).toBeInTheDocument();
    });

    test('should display an error for invalid phone number', async () => {
        renderForm({
            ...initialValues,
            phone: '1234abc'
        });

        fireEvent.submit(screen.getByRole('button', { name: /next/i }));

        expect(await screen.findByText(/phone number is not valid/i)).toBeInTheDocument();
    });

    // Add more tests based on different validation scenarios...
});
