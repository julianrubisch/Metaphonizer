import * as React from "react";
import PropTypes from "prop-types";

import { ButtonWrapper } from "./button-wrapper.styled";

/**
 * Button
 */
export const Button = props => (
  <ButtonWrapper onClick={props.clickAction}>{props.title}</ButtonWrapper>
);

Button.propTypes = {
  title: PropTypes.string,
  clickAction: PropTypes.func
};

export default Button;
