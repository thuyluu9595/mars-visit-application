import React, { useState } from 'react';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import TravelPreferencesForm from '../components/forms/TravelPreferencesForm';
import HealthSafetyForm from '../components/forms/HealthSafetyForm';
import ProgressIndicator from '../components/ProgressIndicator';

const ApplicationForm = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContact: '',
        medicalConditions: '',
    });

    const handleNext = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
        setCurrentStage((prev) => prev + 1);
    };

    const handlePrevious = () => {
        setCurrentStage((prev) => prev - 1);
    };

    const handleSubmit = (finalData) => {
        setFormData((prev) => ({ ...prev, ...finalData }));
        console.log('Final Form Data:', formData);
    };

    const stages = [
        <PersonalInfoForm initialValues={formData} onNext={handleNext} />,
        <TravelPreferencesForm initialValues={formData} onNext={handleNext} onPrevious={handlePrevious} />,
        <HealthSafetyForm initialValues={formData} onNext={handleSubmit} onPrevious={handlePrevious} />,
    ];

    return (
        <div>
            <ProgressIndicator currentStage={currentStage} totalStages={stages.length} />
            {stages[currentStage]}
        </div>
    );
};

export default ApplicationForm;
