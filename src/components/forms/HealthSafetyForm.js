import React from 'react';
import { Field, ErrorMessage } from 'formik';

const HealthSafetyForm = () => {
    return (
        <div className="space-y-8 bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label htmlFor="healthDeclaration" className="block text-sm font-medium text-gray-700">Health Declaration</label>
                    <Field
                        as="select"
                        name="healthDeclaration"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Field>
                    <ErrorMessage name="healthDeclaration" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">Emergency Contact Information</label>
                    <Field
                        type="text"
                        name="emergencyContact"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="emergencyContact" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700">Any Medical Conditions (if applicable)</label>
                    <Field
                        as="textarea"
                        name="medicalConditions"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="medicalConditions" component="div" className="text-red-500 text-sm mt-1" />
                </div>
            </div>
        </div>
    );
};

export default HealthSafetyForm;
