import * as Yup from 'yup';

export const validationSchema = [
    Yup.object({
        fullName: Yup.string().required('Full name is required'),
        dateOfBirth: Yup.date().required('Date of birth is required'),
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
