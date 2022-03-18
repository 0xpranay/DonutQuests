import React from "react";
import styles from "./styles/header.module.scss";
import ConnectWallet from "./ConnectWallet";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.mark}>
          <img src="./images/donut_logo.png" alt="" className={styles.imgCard} />
        </div>
        <div className={styles.wordmark}>Donut Quests</div>
      </div>
      <div>
        <ConnectWallet />
      </div>
    </div>
  );
}
