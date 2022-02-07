import React, { useEffect } from "react";
import styles from "./styles/titleCard.module.scss";
export default function TitleCard() {
  return (
    <div className={styles.titleCard}>
      <div className={styles.title}>
        Explore DeFi. <br />
        Finish quests.
        <br />
        Earn rewards.
      </div>
      <div className={styles.showcase}>
        <img src="unnamed.png" alt="" className={styles.imgCard} />
      </div>
    </div>
  );
}
