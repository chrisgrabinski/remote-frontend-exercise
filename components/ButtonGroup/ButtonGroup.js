import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./ButtonGroup.styles";

export default function ButtonGroup({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

ButtonGroup.defaultProps = {
  children: null,
};
