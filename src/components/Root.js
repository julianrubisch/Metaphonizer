import React from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import withApollo from "../util/withApollo";

const Root = ({ store, client }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </ApolloProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired
};

export default withApollo(Root);
