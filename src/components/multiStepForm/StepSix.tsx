import React from "react";
import styles from "./StepSix.module.css";

const StepSix: React.FC = () => {
  const finishForm = () => {
    window.location.href = "https://www.customerscoops.com/";
  };

  return (
    <div className={styles.stepSixContent}>
      <h2 className={styles.stepTitle}>Muchas Gracias</h2>
      <p className={styles.stepText}>
        por querer ser parte de la familia Scoopers.
      </p>
      <p className={styles.stepText}>Nos vemos pronto!</p>

      {/* Contenedor para el botón de finalizar */}
      <div className={styles.buttonContainer}>
        <button onClick={finishForm} className={styles.finishButton}>
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default StepSix;
