import React from "react";
import styles from "./StepTwo.module.css";
import { FaArrowLeft } from "react-icons/fa"; // Icono de flecha de Font Awesome

interface StepTwoProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  username: string;
}

const StepTwo: React.FC<StepTwoProps> = ({
  goToNextStep,
  goToPreviousStep,
  username,
}) => {
  const options = [
    "Board member",
    "C-level",
    "Gerente",
    "Subgerente",
    "Jefe área",
    "Líder de área",
    "Ejecutivo / Analista",
    "Otro",
  ];

  return (
    <div className={styles.stepTwoContent}>
      <p>
        <strong>Genial, {username}!</strong> Ahora nos gustaría tener cierta
        info para diseñar una gran propuesta de valor para ti:
      </p>
      <p>¿Cuál es tu cargo/posición dentro de tu empresa?</p>

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

export default StepTwo;
