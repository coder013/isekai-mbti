"use client";

import React from "react";
import StartButton from "./StartButton";
import styles from "./Main.module.css";

const Main: React.FC = () => {
  const handleClick = () => {
    alert("테스트 시작!");
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>성격 유형을 알아보세요!</p>
      <StartButton onClick={handleClick} />
    </div>
  );
};

export default Main;
