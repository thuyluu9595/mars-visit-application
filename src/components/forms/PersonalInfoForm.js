import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { personalInfoValidationSchema } from '@/utils/validationSchema'; // Assuming you have a separate schema

const PersonalInfoForm = (isSubmitting) => {
    return (
        <div className="space-y-9">
            <div className="border-b border-gray-900/10 pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                        <Field type="text" name="fullName" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
                        <Field type="date" name="dateOfBirth" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="nationality" className="block text-sm font-medium leading-6 text-gray-900">Nationality</label>
                        <Field type="text" name="nationality" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="nationality" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <Field type="email" name="email" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                        <Field type="text" name="phone" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" disabled={isSubmitting}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoForm;
