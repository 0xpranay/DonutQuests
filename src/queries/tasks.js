import { gql } from "@apollo/client";
const tasks = [
  {
    id: 0,
    title: "Some task title",
    uri: "HTTP URI",
    wait: gql`
      {
        feed {
          id
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `,
    claim: gql`
      {
        feed {
          id
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `,
  },
  {
    id: 0,
    title: "Some task title",
    uri: "HTTP URI",
    wait: gql`
      {
        feed {
          id
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `,
    claim: gql`
      {
        feed {
          id
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `,
  },
];
export default tasks;

function getTasks(address, taskId) {
  return tasks;
}
