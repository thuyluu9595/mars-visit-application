import * as Yup from 'yup';

export const personalInfoValidationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required').nullable(),
    nationality: Yup.string().required('Nationality is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().matches(
        /^\+?[1-9]\d{1,14}$/,
        'Phone number is not valid'
    ).required('Phone number is required'),
});

export const travelPreferencesValidationSchema = Yup.object({
    departureDate: Yup.date().required('Departure Date is required').nullable(),
    returnDate: Yup.date().required('Return Date is required').nullable(),
    accommodation: Yup.string().required('Accommodation Preference is required'),
    specialRequests: Yup.string(),
});

export const healthSafetyValidationSchema = Yup.object({
    healthDeclaration: Yup.boolean().required('Health Declaration is required'),
    emergencyContact: Yup.string().when('healthDeclaration', {
        is: true,
        then: Yup.string().required('Emergency Contact Information is required'),
        otherwise: Yup.string(),
    }),
    medicalConditions: Yup.string(),
});
