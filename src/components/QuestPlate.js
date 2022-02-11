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
    <div className={styles.questPlate}>
      {/* <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider>
      <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider>
      <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider>
      <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider>
      <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider>
      <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider>
      <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider>
      <ApolloProvider>
        <Quest></Quest>
      </ApolloProvider> */}
      {active ? (
        tasks.map(function (task, index) {
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
              ></Quest>
            </ApolloProvider>
          );
        })
      ) : (
        <div>Connect wallet first</div>
      )}
    </div>
  );
}
