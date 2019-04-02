import * as React from "react";
import PropTypes from "prop-types";

/**
 * Button
 */
export const Button = props => <button>{props.title}</button>;

Button.propTypes = {
  title: PropTypes.string
};

export default Button;
