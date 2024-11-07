import React from "react";
import styles from "./StepFour.module.css";
import { FaArrowLeft } from "react-icons/fa";

interface StepFourProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const StepFour: React.FC<StepFourProps> = ({
  goToNextStep,
  goToPreviousStep,
}) => {
  const options = [
    "SAP",
    "Microsoft Dynamics",
    "Salesforce",
    "Hubspot",
    "Zoho",
    "Netsuite (Oracle)",
    "Monday",
    "CRM Propio",
    "No tengo CRM",
  ];

  return (
    <div className={styles.stepTwoContent}>
      <p>¿Cuál CRM están utilizando en tu empresa? CRM:</p>

      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div key={index} className={styles.optionButton}>
            {option}
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.backButton} onClick={goToPreviousStep}>
          <FaArrowLeft className={styles.backIcon} />
        </button>
        <button className={styles.nextButton} onClick={goToNextStep}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default StepFour;
