import React from "react";
import styles from "./styles/infoCard.module.scss";
export default function InfoCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textCard}>
        <p className={styles.text}>
          Donut Quests is an incentive platform where users complete tasks and
          earn donuts. Complete a task, come back next round and claim your
          donuts!
        </p>
      </div>
      <div className={styles.textCard}>
        <p className={styles.text}>
          New tasks are added often. If you want us to include a task, make a
          governance proposal.
        </p>
      </div>
    </div>
  );
}
