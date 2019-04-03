/* eslint react/prop-types: 0 */

import React from "react";
import { ReduxMock } from "react-cosmos-redux";

import configureStore from "../configureStore";

export const MyReduxMock = ({ children, initialState }) => (
  <ReduxMock configureStore={configureStore} initialState={initialState}>
    {children}
  </ReduxMock>
);
