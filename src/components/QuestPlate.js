import React from "react";
import Quest from "./Quest";
import styles from "./styles/questPlate.module.scss";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import tasks from "../queries/tasks";
import { useWeb3React } from "@web3-react/core";

export default function QuestPlate() {
  const { active } = useWeb3React();
  return (
    <>
      {active ? (
        <div className={styles.questPlate}>
          {tasks.map(function (task, index) {
            const httpLink = createHttpLink({
              uri: task.uri,
            });
            const client = new ApolloClient({
              link: httpLink,
              cache: new InMemoryCache(),
              connectToDevTools: true,
            });
            return (
              <ApolloProvider client={client} key={index}>
                <Quest
                  key={index}
                  title={task.title}
                  id={task.id}
                  eligible={task.eligible}
                  img={task.img}
                  url={task.url}
                ></Quest>
              </ApolloProvider>
            );
          })}
        </div>
      ) : (
        <div style={{ padding: "1rem" }}>
          <div className={styles.textCard}>
            <p className={styles.text}>Connect your wallet to view quests</p>
          </div>
        </div>
      )}
    </>
  );
}
