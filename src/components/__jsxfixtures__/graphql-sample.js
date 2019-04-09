import React from "react";
import { MockedProvider } from "react-apollo/test-utils";

import { GET_POSTS_QUERY, GraphQlSample } from "../graphql-sample";

const mocks = [
  {
    request: {
      query: GET_POSTS_QUERY
    },
    result: {
      data: {
        posts: [{ id: "1", title: "Lorem" }, { id: "2", title: "Ipsum" }]
      }
    }
  }
];

export default (
  <MockedProvider mocks={mocks} addTypename={false}>
    <GraphQlSample />
  </MockedProvider>
);
