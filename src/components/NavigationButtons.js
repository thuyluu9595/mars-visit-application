import React from 'react';

const NavigationButtons = ({ step, prevStep, isLastStep, isSubmitting }) => {
    return (
        <div>
            {step > 1 && (
                <button type="button" onClick={prevStep}>
                    Previous
                </button>
            )}
            <button type="submit" disabled={isSubmitting}>
                {isLastStep ? 'Submit' : 'Next'}
            </button>
        </div>
    );
};

export default NavigationButtons;
