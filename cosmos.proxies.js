import createReduxProxy from 'react-cosmos-redux-proxy';
import createRouterProxy from 'react-cosmos-router-proxy';

import configureStore from './src/configureStore';

// Read more about configuring Redux in the Redux proxy section below
const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
});

export default [
  ReduxProxy,
  createRouterProxy()
];
