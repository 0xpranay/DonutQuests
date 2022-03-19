import React from "react";
import styles from "./styles/titleCard.module.scss";
import { SocialIcon } from 'react-social-icons';


export default function TitleCard() {
  return (
    <div className={styles.titleCard}>
      <div className={styles.title}>
        <div className={styles.titleText}>
          Explore DeFi. <br />
          Finish Quests.
          <br />
          Earn Rewards.
        </div>
        <div className={styles.textCard}>
          <p className={styles.text}>
            Donut Quests is an incentive platform where users complete tasks and
            earn donuts. Complete a task, come back next round and claim your donuts!
          </p>
        </div>
        <div className={styles.link}>
          <p className={styles.socialsText}>
            <strong>Want to see a new task?</strong> Join the conversation, new tasks added often!
          </p>
          <div className={styles.socials}>
            <SocialIcon url="https://www.reddit.com/r/ethtrader/" network="reddit" bgColor="#c084fc" fgColor="#fff" style={{ height: 32, width: 32 }}/> 
          </div>
          <div className={styles.socials}>
            <SocialIcon url="https://discord.gg/9sNhkdf2" network="discord" bgColor="#c084fc" fgColor="#fff" style={{ height: 32, width: 32 }}/> 
          </div>
          <div className={styles.socials}>
            <SocialIcon url="https://github.com/EthTrader" network="github" bgColor="#c084fc" fgColor="#fff" style={{ height: 32, width: 32 }}/>
          </div>
        </div>
      </div>
      <div className={styles.showcase}>
        {/* <img src="./images/LOGO.png" alt="" className={styles.imgCard} /> */}
        <img src="./images/hero.png" alt="" className={styles.imgCard} />
      </div>
    </div>
  );
}
