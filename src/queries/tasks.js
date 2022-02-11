import { gql } from "@apollo/client";
const tasks = [
  {
    id: 0,
    title: "Buy atleast 300 DONUTS on Honeyswap",
    uri: "https://api.thegraph.com/subgraphs/name/1hive/honeyswap-v2",
    eligible: gql`
      query ($decideAmount: BigInt, $userAddress: ID!) {
        frontend: swaps(
          where: {
            pair: "0x077240a400b1740c8cd6f73dea37da1f703d8c00"
            timestamp_gte: 0
            amount0Out_gte: $decideAmount
            to: $userAddress
          }
          orderBy: timestamp
          orderDirection: desc
          first: 10
        ) {
          id
        }
      }
    `,
    img: "./images/honeyswap.svg",
  },
  {
    id: 1,
    title: "Provide atleast 300 DONUTS liquidity on Honeyswap",
    uri: "https://api.thegraph.com/subgraphs/name/1hive/honeyswap-v2",
    eligible: gql`
      query ($decideAmount: BigInt, $userAddress: ID!) {
        frontend: liquidityPositions(
          where: {
            user: $userAddress
            pair: "0x077240a400b1740c8cd6f73dea37da1f703d8c00"
            liquidityTokenBalance_gt: $decideAmount
          }
        ) {
          liquidityTokenBalance
        }
      }
    `,
    img: "./images/honeyswap.svg",
  },
  {
    id: 2,
    title: "Deposit atleast 0.01 GNO on Agave.Finance",
    uri: "https://api.thegraph.com/subgraphs/name/agave-dao/agave-xdai",
    eligible: gql`
      query ($decideAmount: BigInt, $userAddress: ID!) {
        frontend: userReserves(
          where: {
            user: $userAddress
            reserve: "0x9c58bacc331c9aa871afd802db6379a98e80cedb0xa91b9095efa6c0568467562032202108e49c9ef8"
            currentATokenBalance_gt: $decideAmount
          }
        ) {
          currentATokenBalance
          reserve {
            symbol
          }
        }
      }
    `,
    img: "./images/agave.webp",
  },
  {
    id: 3,
    title: "Borrow atleast 0.01 GNO on Agave.Finance",
    uri: "https://api.thegraph.com/subgraphs/name/agave-dao/agave-xdai",
    eligible: gql`
      query ($decideAmount: BigInt, $userAddress: ID!) {
        frontend: user(id: $userAddress) {
          reserves(
            where: {
              reserve: "0x9c58bacc331c9aa871afd802db6379a98e80cedb0xa91b9095efa6c0568467562032202108e49c9ef8"
              currentTotalDebt_gte: $decideAmount
            }
          ) {
            currentTotalDebt
          }
        }
      }
    `,
    img: "./images/agave.webp",
  },
];
export default tasks;

function getTask(address, taskId) {
  return tasks;
}
