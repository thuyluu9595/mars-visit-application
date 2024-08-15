import * as Yup from 'yup';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const validationSchema = [
    Yup.object({
        fullName: Yup.string().required('Full name is required'),
        dateOfBirth: Yup.date()
            .max(today, 'Date of birth must be a date before today')
            .required('Date of birth is required'),
        nationality: Yup.string().required('Nationality is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().matches(
            /^\+?[1-9]\d{1,14}$/,
            'Phone number is not valid'
        ).required('Phone number is required'),
    }),
    Yup.object({
        departureDate: Yup.date()
            .min(today, 'Departure Date must be a date after today')
            .required('Departure Date is required'),
        returnDate: Yup.date()
            .required('Return Date is required')
            .test('is-after-departureDate', 'Return Date must be after Departure Date', function(value) {
                const { departureDate } = this.parent;
                return value && departureDate && value > departureDate;
            })
            .min(today, 'Return Date must be a date after today'),
        accommodation: Yup.string().required('Accommodation Preference is required'),
        specialRequests: Yup.string(),
    }),
    Yup.object({
        healthDeclaration: Yup.string().required('Health Declaration is required'),
        emergencyContact: Yup.string().required('Emergency Contact is required'),
        medicalConditions: Yup.string(),
    }),
];
