import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Button.styles";

export default function Button({ as, children, href, isSecondary, onClick }) {
  return <Wrapper {...{ as, href, isSecondary, onClick }}>{children}</Wrapper>;
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  href: PropTypes.string,
  isSecondary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  as: null,
  children: null,
  href: null,
  isSecondary: false,
  onClick: () => {},
};
