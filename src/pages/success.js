import React from 'react';
import SuccessMessage from '../components/SuccessMessage';

export default function Success() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-3/4 bg-white p-8 rounded-lg shadow-2xl text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Application Submitted Successfully!</h1>
                <SuccessMessage />
            </div>
        </div>
    );
}
