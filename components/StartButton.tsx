"use client";

import React from "react";
import styles from "./StartButton.module.css";

type StartButtonProps = {
  onClick: () => void;
};

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.startButton} onClick={onClick}>
      시작하기
    </button>
  );
};

export default StartButton;
