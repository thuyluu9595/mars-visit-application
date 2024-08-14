import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TravelPreferencesForm = () => {
    return (
        <div className="space-y-9">
            <div className="border-b border-gray-900/10 pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                        <label htmlFor="departureDate" className="block text-sm font-medium leading-6 text-gray-900">Departure Date</label>
                        <Field type="date" name="departureDate" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="departureDate" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="returnDate" className="block text-sm font-medium leading-6 text-gray-900">Return Date</label>
                        <Field type="date" name="returnDate" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="returnDate" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="accommodation" className="block text-sm font-medium leading-6 text-gray-900">Accommodation Preference</label>
                        <Field as="select" name="accommodation" className="px-4 py-2 border rounded-md">
                            <option value="">Select</option>
                            <option value="spaceHotel">Space Hotel</option>
                            <option value="martianBase">Martian Base</option>
                        </Field>
                        <ErrorMessage name="accommodation" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="specialRequests" className="block text-sm font-medium leading-6 text-gray-900">Special Requests or Preferences</label>
                        <Field as="textarea" name="specialRequests" className="px-4 py-2 border rounded-md" />
                        <ErrorMessage name="specialRequests" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelPreferencesForm;
