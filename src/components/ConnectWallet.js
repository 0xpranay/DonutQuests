import React, { useState } from "react";
import styles from "./styles/connectWallet.module.scss";
import {
  InjectedConnector,
  NoEthereumProviderError,
} from "@web3-react/injected-connector";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
import ReactModal from "react-modal";

function WalletModal(props) {
  const { account, active, activate, deactivate } = useWeb3React();
  ReactModal.setAppElement("#root");
  return (
    <ReactModal
      isOpen={props.show}
      className={styles.content}
      overlayClassName={styles.overlay}
      onRequestClose={props.toggleModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={styles.walletBox}>
        <div className={styles.head}>
          <div className={styles.ask}>Connect a wallet</div>
          <button className={styles.closeBtn} onClick={props.toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>
        <div className={styles.wallets}>
          <button className={styles.wallet}>
            <div>{window.ethereum ? "Metamask" : "Install Metamask"}</div>
            <div>
              <img
                src="./images/metamask.png"
                alt="Metamask"
                width={"24px"}
                height={"24px"}
              />
            </div>
          </button>
          <button className={styles.wallet}>
            <div>WalletConnect</div>
            <div>
              <img
                src="./images/walletconnect.svg"
                alt="WalletConnect"
                width={"24px"}
                height={"24px"}
              />
            </div>
          </button>
          <button className={styles.wallet}>
            <div>Coinbase Wallet</div>
            <div>
              <img
                src="./images/coinbase.svg"
                alt="WalletConnect"
                width={"24px"}
                height={"24px"}
              />
            </div>
          </button>
          <button className={styles.wallet}>
            <div>Fortmatic</div>
            <div>
              <img
                src="./images/fortmatic.png"
                alt="WalletConnect"
                width={"24px"}
                height={"24px"}
              />
            </div>
          </button>
          <button className={styles.wallet}>
            <div>Portis</div>
            <div>
              <img
                src="./images/portis.png"
                alt="WalletConnect"
                width={"24px"}
                height={"24px"}
              />
            </div>
          </button>
        </div>
      </div>
    </ReactModal>
  );
}
export default function ConnectWallet() {
  const { account, active, activate, deactivate } = useWeb3React();
  const [modal, setModal] = useState(false);
  function toggleModal() {
    if (modal) document.body.style.overflow = "visible";
    if (!modal) document.body.style.overflow = "hidden";
    setModal((modal) => !modal);
  }
  return (
    <>
      <button onClick={toggleModal} className={styles.connect}>
        Connect Wallet
      </button>
      <WalletModal show={modal} toggleModal={toggleModal}></WalletModal>
    </>
  );
}
