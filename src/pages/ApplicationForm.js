// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import PersonalInfoForm from '../components/forms/PersonalInfoForm';
// import TravelPreferencesForm from '../components/forms/TravelPreferencesForm';
// import HealthSafetyForm from '../components/forms/HealthSafetyForm';
// import ProgressIndicator from '../components/ProgressIndicator';
//
// const ApplicationForm = () => {
//     const [currentStage, setCurrentStage] = useState(0);
//     const [formData, setFormData] = useState({
//         fullName: '',
//         dateOfBirth: '',
//         nationality: '',
//         email: '',
//         phone: '',
//         departureDate: '',
//         returnDate: '',
//         accommodation: '',
//         specialRequests: '',
//         healthDeclaration: '',
//         emergencyContact: '',
//         medicalConditions: '',
//     });
//
//     const router = useRouter();
//
//     const handleNext = (newData) => {
//         setFormData((prev) => ({ ...prev, ...newData }));
//         setCurrentStage((prev) => prev + 1);
//     };
//
//     const handlePrevious = () => {
//         setCurrentStage((prev) => prev - 1);
//     };
//
//     const handleSubmit = (finalData) => {
//         setFormData((prev) => ({ ...prev, ...finalData }));
//         router.push('/success');
//     };
//
//     const stages = [
//         <PersonalInfoForm initialValues={formData} onNext={handleNext} />,
//         <TravelPreferencesForm initialValues={formData} onNext={handleNext} onPrevious={handlePrevious} />,
//         <HealthSafetyForm initialValues={formData} onNext={handleSubmit} onPrevious={handlePrevious} />,
//     ];
//
//     return (
//         <div>
//             <ProgressIndicator currentStage={currentStage} totalStages={stages.length} />
//             {stages[currentStage]}
//         </div>
//     );
// };
//
// export default ApplicationForm;
import React, { useState } from 'react';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import TravelPreferencesForm from '../components/forms/TravelPreferencesForm';
import HealthSafetyForm from '../components/forms/HealthSafetyForm';
import NavigationButtons from '../components/NavigationButtons';
import ProgressIndicator from '../components/ProgressIndicator';

export default function ApplicationForm() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div>
            <h1>Mars Visit Application</h1>
            <ProgressIndicator step={step} />
            {step === 1 && <PersonalInfoForm />}
            {step === 2 && <TravelPreferencesForm />}
            {step === 3 && <HealthSafetyForm />}
            <NavigationButtons step={step} nextStep={nextStep} prevStep={prevStep} />
        </div>
    );
}

