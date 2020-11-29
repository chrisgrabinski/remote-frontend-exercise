import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Label, Body, Hint } from "./FormItem.styles";

export default function FormItem({ children, hint, label }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Body>{children}</Body>
      <Hint>{hint}</Hint>
    </Wrapper>
  );
}

FormItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  hint: PropTypes.string,
  label: PropTypes.string,
};

FormItem.defaultProps = {
  children: null,
  hint: null,
  label: null,
};
