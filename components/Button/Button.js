import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Icon } from "./Button.styles";

export default function Button({
  children,
  icon,
  isHighlight,
  isSecondary,
  onClick,
  size,
  ...props
}) {
  return (
    <Wrapper {...{ isHighlight, isSecondary, onClick, size, ...props }}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  icon: PropTypes.node,
  isHighlight: PropTypes.bool,
  isSecondary: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "lg"]),
};

Button.defaultProps = {
  children: null,
  icon: null,
  isHighlight: false,
  isSecondary: false,
  onClick: () => {},
  size: "md",
};
