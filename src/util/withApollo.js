import ApolloClient from "apollo-boost";
import React from "react";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default function withApollo(WrappedComponent) {
  class WithApollo extends React.Component {
    render() {
      const client = new ApolloClient({
        // uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
        request: operation => {
          operation.setContext({
            fetchOptions: {
              credentials: "include"
            }
          });
        }
      });
      return <WrappedComponent client={client} {...this.props} />;
    }
  }

  WithApollo.displayName = `WithApollo(${getDisplayName(WrappedComponent)})`;

  return WithApollo;
}
