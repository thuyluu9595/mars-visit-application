import React from 'react';
import { Field, ErrorMessage } from 'formik';

const HealthSafetyForm = () => {
    return (
        <div className="space-y-9">
            <div className="border-b border-gray-900/10 pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                        <label htmlFor="healthDeclaration" className="block text-sm font-medium leading-6 text-gray-900">Health Declaration</label>
                        <Field as="select" name="healthDeclaration" className="px-4 py-2 border rounded-md">
                            <option value="">Select</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Field>
                        <ErrorMessage name="healthDeclaration" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="emergencyContact" className="block text-sm font-medium leading-6 text-gray-900">Emergency Contact Information</label>
                        <Field type="text" name="emergencyContact" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="emergencyContact" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="medicalConditions" className="block text-sm font-medium leading-6 text-gray-900">Any Medical Conditions (if applicable)</label>
                        <Field as="textarea" name="medicalConditions" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="medicalConditions" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthSafetyForm;
