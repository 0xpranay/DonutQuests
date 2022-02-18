import React, { useState } from "react";
import styles from "./styles/connectWallet.module.scss";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortisConnector } from "@web3-react/portis-connector";
import {
  InjectedConnector,
  NoEthereumProviderError,
} from "@web3-react/injected-connector";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useWeb3React } from "@web3-react/core";
import ReactModal from "react-modal";
const WalletDetails = () => {
  const { account, deactivate } = useWeb3React();
  const shorthand =
    account.substr(0, 6) + "..." + account.substr(account.length - 4);
  return (
    <div className={styles.walletDetails}>
      <div className={styles.addressBox}>
        <div className={styles.address}>{shorthand}</div>
        <Jazzicon diameter={18} seed={jsNumberForAddress(account)} />
      </div>
      <div>
        <button onClick={deactivate} className={styles.disconnect}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
function WalletModal(props) {
  const { account, active, activate, deactivate, chainId } = useWeb3React();
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
          <button
            className={styles.wallet}
            onClick={async () => {
              await activate(
                new InjectedConnector({
                  supportedChainIds: [1337],
                })
              );
              props.toggleModal();
            }}
          >
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
          <button
            className={styles.wallet}
            onClick={async () => {
              await activate(
                new WalletConnectConnector({
                  infuraId: undefined,
                  rpc: {
                    100: "https://dai.poa.network/",
                  },
                  chainId: 100,
                })
              );
              if (chainId != 100) alert("Please change to XDAI Chain");
              props.toggleModal();
            }}
          >
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
          {/* <button
            className={styles.wallet}
            onClick={async () => {
              await activate(
                new FortmaticConnector({
                  apiKey: process.env.REACT_APP_FORTMATIC,
                  chainId: 100,
                })
              );
              if (chainId != 100) alert("Please change to XDAI Chain");
            }}
          >
            <div>Fortmatic</div>
            <div>
              <img
                src="./images/fortmatic.png"
                alt="WalletConnect"
                width={"24px"}
                height={"24px"}
              />
            </div>
          </button> */}
          <button
            className={styles.wallet}
            onClick={async () => {
              await activate(
                new PortisConnector({
                  dAppId: process.env.REACT_APP_PORTIS,
                  networks: [100],
                })
              );
              props.toggleModal();
            }}
          >
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
  const { account, active, activate, deactivate, library } = useWeb3React();
  const [modal, setModal] = useState(false);
  function toggleModal() {
    if (modal) document.body.style.overflow = "visible";
    if (!modal) document.body.style.overflow = "hidden";
    setModal((modal) => !modal);
  }
  async function sign() {
    let input = prompt("Enter Message");
    const message = await library.getSigner(account).signMessage(input);
    alert(message);
  }

  async function send() {
    await library.getSigner(account).sendTransaction({
      nonce: account.nonce, // 0 in decimal
      gasLimit: "0x5208", // 21000 in decimal
      gasPrice: null, // 1000000000 in decimal
      to: "0x17A98d2b11Dfb784e63337d2170e21cf5DD04631",
      value: "0x9184E72A000", // 100000000000000000 in decimal
      data: "0x", // “empty” value in decimal
      // "chainId": 4 // Ethereum network id
    });
  }
  return (
    <>
      {!active ? (
        <div>
          <button onClick={toggleModal} className={styles.connect}>
            Connect Wallet
          </button>
          <WalletModal show={modal} toggleModal={toggleModal}></WalletModal>
        </div>
      ) : (
        // <div style={{ display: "flex", flexDirection: "column" }}>
        //   <button className={styles.connect} onClick={deactivate}>
        //     Connected
        //   </button>
        //   <button className={styles.connect} onClick={sign}>
        //     Sign
        //   </button>
        //   <button className={styles.connect} onClick={send}>
        //     Send
        //   </button>
        // </div>
        // <WalletDetails></WalletDetails>
        <button onClick={deactivate} className={styles.connect}>
          Disconnect
        </button>
      )}
    </>
  );
}
