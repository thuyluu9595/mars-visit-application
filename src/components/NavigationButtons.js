import React from 'react';

const NavigationButtons = ({ onPrevious, isSubmitting, isLastStage = false }) => {
    return (
        <div className="navigation-buttons">
            {onPrevious && (
                <button type="button" onClick={onPrevious}>
                    Previous
                </button>
            )}
            <button type="submit" disabled={isSubmitting}>
                {isLastStage ? 'Submit' : 'Next'}
            </button>
        </div>
    );
};

export default NavigationButtons;
