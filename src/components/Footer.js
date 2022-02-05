import React from "react";
import styles from "./styles/footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.brand}>
        <div className={styles.desc}>Made by folks at</div>
        <div className={styles.logo}>
          <p className={styles.reddit}>r/</p>Ethtrader
        </div>
      </div>
      <div className={styles.links}></div>
    </div>
  );
}
