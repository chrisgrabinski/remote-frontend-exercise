import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Container.styles";

export default function Container({ children, className }) {
  return <Wrapper {...{ className }}>{children}</Wrapper>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  className: null,
};
