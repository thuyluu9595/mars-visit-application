import React from 'react';
import { Field, ErrorMessage } from 'formik';

const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany",
    "France", "India", "China", "Japan", "Brazil", "Mexico", "Russia",
    "South Africa", "Italy", "Spain", "Netherlands", "Sweden", "Switzerland",
    "Norway", "New Zealand", "Argentina", "Chile", "South Korea", "Nigeria"
];

const PersonalInfoForm = () => {
    return (
        <div className="space-y-8 bg-white p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <Field
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <Field
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                    <Field
                        as="select"
                        name="nationality"
                        id="nationality"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="nationality" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Field
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <Field
                        type="text"
                        name="phone"
                        id="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoForm;
