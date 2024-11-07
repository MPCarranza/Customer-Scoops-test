import React, { useState } from "react";
import styles from "./MultiStepForm.module.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userName, setUserName] = useState<string>(""); // Estado para almacenar el nombre del usuario
  const totalSteps = 6;

  const progressPercentage = (currentStep / totalSteps) * 100;

  const goToNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const formatStep = (step: number) => {
    return step.toString().padStart(2, "0");
  };

  // Función para renderizar el contenido según el paso actual
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne goToNextStep={goToNextStep} setUserName={setUserName} />
        );
      case 2:
        return (
          <StepTwo
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
            username={userName}
          />
        );
      case 3:
        return (
          <StepThree
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        );
      case 4:
        return (
          <StepFour
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        );
      case 5:
        return (
          <StepFive
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        );
      case 6:
        return <StepSix />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.formContainer}>
      {/* Barra de progreso */}
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {/* Contenedor de columnas */}
      <div className={styles.columns}>
        {/* Columna izquierda */}
        <div className={styles.leftColumn}>
          <div className={styles.stepContentContainer}>
            <img src="logo.png" alt="Logo" className={styles.logo} />
            {renderStepContent()} {/* Contenido que cambia por cada paso */}
          </div>
        </div>

        {/* Columna derecha para la imagen */}
        <div className={styles.rightColumn}>
          <h2 className={styles.stepCounter}>
            <span className={styles.currentStep}>
              {formatStep(currentStep)}
            </span>
            |<span className={styles.totalSteps}>{formatStep(totalSteps)}</span>
          </h2>
          <img
            src="celman.png"
            alt="Descripción de la imagen"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
