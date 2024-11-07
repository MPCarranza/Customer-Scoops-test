import React from "react";
import styles from "./multiStepForm/MultiStepForm.module.css";

interface OptionButtonProps {
  label: string;
  value: string;
  onSelect: (value: string) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  value,
  onSelect,
}) => {
  return (
    <button className={styles.optionButton} onClick={() => onSelect(value)}>
      <span className={styles.optionLetter}>{label}</span>
      <span className={styles.optionText}>{value}</span>
    </button>
  );
};

export default OptionButton;
