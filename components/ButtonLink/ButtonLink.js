import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Button from "../Button";

import { Wrapper } from "../Button/Button.styles";

export default function ButtonLink({
  children,
  href,
  icon,
  isHighlight,
  isSecondary,
  size,
}) {
  return (
    <Link {...{ href }} passHref>
      <a>
        <Button as="span" {...{ icon, isHighlight, isSecondary, size }}>
          {children}
        </Button>
      </a>
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  href: PropTypes.string,
  icon: PropTypes.node,
  isHighlight: PropTypes.bool,
  isSecondary: PropTypes.bool,
  size: PropTypes.oneOf(["md", "lg"]),
};

ButtonLink.defaultProps = {
  children: null,
  href: null,
  icon: null,
  isHighlight: false,
  isSecondary: false,
  size: "md",
};
