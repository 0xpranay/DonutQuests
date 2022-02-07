import React from "react";
import styles from "./styles/footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.brand}>
        {/* <div className={styles.desc}>Made by folks at</div> */}
        <a className={styles.logo} href="reddit.com">
          <p className={styles.reddit}>r/</p>
          <p className={styles.special}>ethtrader</p>
        </a>
      </div>
      <div className={styles.linksWrap}>
        <div className={styles.links}>
          <li className={styles.headlist}>PARTICIPATE</li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/comments/nsxjw7/daily_discussion/"
              target="_blank"
            >
              Daily Thread
            </a>
          </li>
          <li>
            <a href="https://donut-dashboard.com/#/register" target="_blank">
              Register
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/comments/nf1a5i/how_to_claim_donuts_faq/"
              target="_blank"
            >
              Claim
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/wiki/donuts/governance_polls_to_date/"
              target="_blank"
            >
              Polls
            </a>
          </li>
        </div>
        <div className={styles.links}>
          <li className={styles.headlist}>CONTRIBUTE</li>
          <li>
            <a href="https://www.reddit.com/r/ethtrader/submit" target="_blank">
              Post
            </a>
          </li>
          <li>
            <a href="https://www.donut.finance/" target="_blank">
              Tip
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/wiki/donuts/donut_initiatives_to_date"
              target="_blank"
            >
              Initiatives
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/comments/ogugf9/governance_discussion/"
              target="_blank"
            >
              Governance
            </a>
          </li>
        </div>
        <div className={styles.links}>
          <li className={styles.headlist}>DONUTS</li>
          <li>
            <a
              href="https://app.uniswap.org/#/swap?theme=dark&use=v3&outputCurrency=0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9"
              target="_blank"
            >
              Buy on Uniswap
            </a>
          </li>
          <li>
            <a href="https://app.honeyswap.org/#/swap" target="_blank">
              Buy on Honeyswap
            </a>
          </li>
          <li>
            <a
              href="https://cloudflare-ipfs.com/ipfs/QmajDWDWim8r6muJP1DgFysEAiWVYFf5spw9itY5MgX24W"
              target="_blank"
            >
              Stake on Mainnet
            </a>
          </li>
          <li>
            <a
              href="https://ipfs.io/ipfs/QmWGrKnCkcUX8jPGfamQ7qA3pvbDsuXmyVE8BAy6NrNBSn"
              target="_blank"
            >
              Stake on XDAI
            </a>
          </li>
        </div>
        <div className={styles.links}>
          <li className={styles.headlist}>LEARN</li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/wiki/donuts"
              target="_blank"
            >
              Donuts
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/wiki/governance"
              target="_blank"
            >
              Governance Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/comments/an5577/a_communityled_initiative_to_decentralize_donuts/"
              target="_blank"
            >
              Decentralisation
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ethtrader/wiki/policy"
              target="_blank"
            >
              Policy
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
