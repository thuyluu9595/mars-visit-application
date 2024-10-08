import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TravelPreferencesForm = () => {
    return (
        <div className="space-y-8 bg-white p-6 ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                    <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">Departure Date</label>
                    <Field
                        type="date"
                        name="departureDate"
                        id="departureDate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="departureDate" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">Return Date</label>
                    <Field
                        type="date"
                        name="returnDate"
                        id="returnDate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="returnDate" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700">Accommodation Preference</label>
                    <Field
                        as="select"
                        name="accommodation"
                        id="accommodation"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Select</option>
                        <option value="spaceHotel">Space Hotel</option>
                        <option value="martianBase">Martian Base</option>
                    </Field>
                    <ErrorMessage name="accommodation" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">Special Requests or Preferences</label>
                    <Field
                        as="textarea"
                        name="specialRequests"
                        id="specialRequests"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="specialRequests" component="div" className="text-red-500 text-sm mt-1" />
                </div>
            </div>
        </div>
    );
};

export default TravelPreferencesForm;
