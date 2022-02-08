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

export default function QuestPlate() {
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
      {tasks.map(function (task) {
        const httpLink = createHttpLink({
          uri: task.uri,
        });
        const client = new ApolloClient({
          link: httpLink,
          cache: new InMemoryCache(),
        });
        return (
          <ApolloProvider client={client}>
            <Quest
              key={task.id}
              title={task.title}
              id={task.id}
              wait={task.wait}
              claim={task.claim}
            ></Quest>
          </ApolloProvider>
        );
      })}
    </div>
  );
}
