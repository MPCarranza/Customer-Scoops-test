import React from "react";
import styles from "./StepThree.module.css";
import { FaArrowLeft } from "react-icons/fa";

interface StepThreeProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  goToNextStep,
  goToPreviousStep,
}) => {
  const options = [
    "Aumentar conversión de leads a clientes",
    "Reducir customer churn",
    "Implementar un programa VoC",
    "Reducir costos en gestión de reclamos",
    "Optimizar procesos comerciales",
    "Optimizar procesos operativos",
    "Otro",
  ];

  return (
    <div className={styles.stepThreeContent}>
      <p>¿Cuáles son tus principales desafíos para 2024?</p>

      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div key={index} className={styles.optionButton}>
            <div className={styles.optionLetter}>
              {String.fromCharCode(65 + index)}
            </div>
            <span className={styles.optionText}>{option}</span>
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

export default StepThree;
