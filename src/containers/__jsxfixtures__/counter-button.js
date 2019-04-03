import React from "react";

import { MyReduxMock } from "../../util/my-redux-mock";
import CounterButton from "../counter-button";

export default (
  <MyReduxMock initialState={{ count: 99 }}>
    <CounterButton />
  </MyReduxMock>
);
