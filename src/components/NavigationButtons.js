import React from 'react';

const NavigationButtons = ({ step, prevStep }) => {
    return (
        <div className="flex justify-between mt-6">
            <div>
                {step > 0 && (
                    <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Previous
                    </button>
                )}
            </div>
            <div className="ml-auto">
                <button
                    type="submit"
                    className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {step === 2 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default NavigationButtons;
