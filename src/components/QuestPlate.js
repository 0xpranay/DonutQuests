import React from "react";
import Quest from "./Quest";
import styles from "./styles/questPlate.module.scss";
export default function QuestPlate() {
  return (
    <div className={styles.questPlate}>
      <Quest></Quest>
      <Quest></Quest>
      <Quest></Quest>
      <Quest></Quest>
      <Quest></Quest>
      <Quest></Quest>
      <Quest></Quest>
      <Quest></Quest>
    </div>
  );
}
