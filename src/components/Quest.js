/* global BigInt */
import React, { useState } from "react";
import styles from "./styles/quest.module.scss";
import { useQuery } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { CircleLoader } from "react-spinners";
import { ethers } from "ethers";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";
import QuestRewards from "../abis/QuestRewards.json";
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
  const [statusText, setStatusText] = useState("Pending");
  const { account, library } = useWeb3React();
  let eligiblityCheckCompleted = false;
  const signer = library.getSigner();
  const contractAddress = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";
  const rewardsContract = new ethers.Contract(
    contractAddress,
    QuestRewards.abi,
    signer
  );
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
  const params = {
    userAddress: account.toLowerCase(),
    decideAmount: amount,
  };
  async function checkEligibility() {
    // Call after data is reached.
    const alreadyClaimed = await rewardsContract.claimed(0, account);
    if (alreadyClaimed == true) {
      setStatus(false);
      setStatusText("Claimed");
      eligiblityCheckCompleted = true;
      return;
    }
    const _ = await fetch(`./claims/${props.id}.json`);
    const taskClaims = await _.json();
    console.log("User can ", statusText, " for id ", props.id);
    if (error) console.log("Failed to fetch details.");
    if (taskClaims.users.includes(account)) {
      eligiblityCheckCompleted = true;
      setStatusText("Claim");
      setStatus(true);
      return;
    }
    switch (props.id) {
      case 0:
        if (data.frontend.length >= 1) {
          setStatus(true);
          setStatusText("Eligible");
        }
        console.log(props.id, data.frontend[0]);
        break;
      case 1:
        if (data.frontend.length >= 1) {
          setStatus(true);
          setStatusText("Eligible");
        }
        console.log(props.id, data.frontend[0]);
        break;
      case 2:
        if (data.frontend.length >= 1) {
          setStatus(true);
          setStatusText("Eligible");
        }
        console.log(props.id, data.frontend[0]);
        break;
      case 3:
        if (data.frontend.reserves.length >= 1) {
          setStatus(true);
          setStatusText("Eligible");
        }
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
  async function handleTask() {
    if (status && statusText == "Claim") {
      try {
        // Generate the merkle tree.
        const _ = await fetch(`./claims/${props.id}.json`);
        const taskClaims = await _.json();
        console.log(account);
        const merkleTree = new MerkleTree(
          taskClaims.users.map((x) => keccak256(x)),
          keccak256,
          {
            sortPairs: true,
          }
        );
        const proof = merkleTree.getHexProof(keccak256(account));
        console.log(proof);
        const claimTxn = await rewardsContract.claim(props.id, proof);
        await claimTxn.wait();
        setStatus(false);
        setStatusText("Claimed");
      } catch (error) {
        console.log(error);
      }
    }
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
        </div>
        <div className={styles.infoPanel}>
          <div className={styles.round}>Round 1</div>
          <div className={styles.reward}>
            100
            <img src="./images/donut.png" alt="" />
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
          onClick={handleTask}
          className={status ? styles.claim : styles.claimDisabled}
        >
          {loading ? (
            <ClipLoader loading={loading} css={override} size={30} />
          ) : (
            <>{statusText}</>
          )}
        </button>
      </div>
    </div>
  );
}
