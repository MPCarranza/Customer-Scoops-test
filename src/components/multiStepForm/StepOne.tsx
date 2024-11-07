import React, { useState } from "react";
import styles from "./MultiStepForm.module.css";

interface StepOneProps {
  goToNextStep: () => void;
  setUserName: (name: string) => void; // Propiedad para actualizar el nombre en el componente padre
}

const StepOne: React.FC<StepOneProps> = ({ goToNextStep, setUserName }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserName(name); // Se actualiza el nombre en el componente padre
    goToNextStep(); // Avanza al siguiente paso
  };

  return (
    <div className={styles.stepContent}>
      <p>
        Muchas gracias por tu interés en conocer <strong>customerScoops</strong>
        , que a través de Formularios Conversacionales Inteligente te ayudamos a
        aumentar el revenue y rentabilidad de tu negocio.
      </p>
      <p>Queremos conocerte, ¿cuál es tu nombre?</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          className={styles.nameInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className={styles.startButton}>
          Comenzar
        </button>
      </form>
    </div>
  );
};

export default StepOne;
