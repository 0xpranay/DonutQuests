/* global BigInt */
import React, { useState } from "react";
import styles from "./styles/quest.module.scss";
import { useQuery } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { CircleLoader } from "react-spinners";
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Quest(props) {
  const [status, setStatus] = useState(false);
  let eligiblityCheckCompleted = false;
  let amount = BigInt(0);
  switch (props.id) {
    case 0:
      amount = BigInt(300 * 10 ** 18);
      amount = 300;
      break;
    case 1:
      amount = 0;
      break;
    case 2:
      amount = BigInt(0.01 * 10 ** 18);
      break;
    case 3:
      amount = BigInt(0.01 * 10 ** 18);
      break;
  }
  const { account } = useWeb3React();
  const params = {
    userAddress: account.toLowerCase(),
    decideAmount: amount,
  };
  function checkEligibility() {
    // Call after data is reached.
    if (error) console.log("Failed to fetch details.");
    switch (props.id) {
      case 0:
        if (data.frontend.length >= 1) setStatus(true);
        console.log(props.id, data.frontend[0]);
        break;
      case 1:
        if (data.frontend.length >= 1) setStatus(true);
        console.log(props.id, data.frontend[0]);
        break;
      case 2:
        if (data.frontend.length >= 1) setStatus(true);
        console.log(props.id, data.frontend[0]);
        break;
      case 3:
        if (data.frontend.reserves.length >= 1) setStatus(true);
        console.log(props.id, data.frontend.reserves[0]);
        break;
    }
    eligiblityCheckCompleted = true;
  }
  const { data, loading, error } = useQuery(props.eligible, {
    variables: params,
    onCompleted: checkEligibility,
  });
  function printQuery() {
    console.log("Query for " + props.title);
    if (error) {
      console.log("Printing Error, ");
      console.log(error);
      return;
    }
    console.log(data);
  }

  return (
    <div className={styles.task}>
      {!loading ? printQuery() : ""}
      <div className={styles.taskHeader}>
        <div className={styles.logo}>
          <img
            src={props.img}
            alt="Platform Logo"
            width={"80px"}
            height={"80px"}
          />
          {/* <svg
            id="logo-37"
            width="42"
            height="38"
            viewBox="0 0 42 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
            <path
              d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
              className="ccustom"
              fill="#25CAAC"
            ></path>{" "}
          </svg> */}
        </div>
        <div className={styles.infoPanel}>
          <div className={styles.round}>Round 1</div>
          <div className={styles.reward}>
            100
            <img
              src="https://www.redditstatic.com/desktop2x/img/communityPoints/Donuts_filled.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.taskBody}>{props.title}</div>
      <div className={styles.taskFooter}>
        <button
          onClick={() => {
            alert("Clicked details");
          }}
          className={styles.details}
        >
          Details
        </button>
        <button
          disabled={!status}
          onClick={() => {
            alert("Task Clicked");
          }}
          className={status ? styles.claim : styles.claimDisabled}
        >
          {loading ? (
            <ClipLoader loading={loading} css={override} size={30} />
          ) : (
            <>{status ? "Eligible" : "Pending"}</>
          )}
        </button>
      </div>
    </div>
  );
}
