import React from "react";
import styles from "./StepFive.module.css";
import { FaArrowLeft } from "react-icons/fa";

interface StepFourProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const StepFive: React.FC<StepFourProps> = ({
  goToNextStep,
  goToPreviousStep,
}) => {
  const options = [
    "Tecnología",
    "Software",
    "Servicios",
    "Financiera",
    "Telecomunicaciones",
    "Producción /Fabricación",
    "Logística",
    "Consumo Masivo",
    "Mayorista",
    "Retail",
    "Otra",
  ];

  return (
    <div className={styles.stepFiveContent}>
      <p>
        <strong>Ahora te vamos a sorprender...</strong> <br /> ¿A cuál industria
        pertenece tu empresa?
      </p>

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

export default StepFive;
