import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Icon } from "./Button.styles";

export default function Button({
  as,
  children,
  href,
  icon,
  isHighlight,
  isSecondary,
  onClick,
  size,
}) {
  return (
    <Wrapper {...{ as, href, isHighlight, isSecondary, onClick, size }}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  href: PropTypes.string,
  icon: PropTypes.node,
  isHighlight: PropTypes.bool,
  isSecondary: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "lg"]),
};

Button.defaultProps = {
  as: null,
  children: null,
  href: null,
  icon: null,
  isHighlight: false,
  isSecondary: false,
  onClick: () => {},
  size: "md",
};
