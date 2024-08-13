import React from 'react';
import './ProgressIndicator.css'; // Assuming you're adding custom styles

const ProgressIndicator = ({ currentStage, totalStages }) => {
    return (
        <div className="progress-indicator">
            {Array.from({ length: totalStages }, (_, index) => (
                <div
                    key={index}
                    className={`progress-step ${index <= currentStage ? 'active' : ''}`}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
};

export default ProgressIndicator;
