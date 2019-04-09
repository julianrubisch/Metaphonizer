import * as React from "react";
// import PropTypes from "prop-types";

import gql from "graphql-tag";
import { Query } from "react-apollo";

export const GET_POSTS_QUERY = gql`
  query {
    posts {
      id
      title
    }
  }
`;

/**
 * GraphQlSample
 */
export const GraphQlSample = () => (
  <Query query={GET_POSTS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error!`;

      return data.posts.map(({ title }) => <div key={title}>{title}</div>);
    }}
  </Query>
);

GraphQlSample.propTypes = {};

export default GraphQlSample;
