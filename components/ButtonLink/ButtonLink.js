import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { Wrapper } from "../Button/Button.styles";

export default function ButtonLink({ children, href, isSecondary }) {
  return (
    <Link {...{ href }} passHref>
      <a>
        <Wrapper as="span" {...{ isSecondary }}>
          {children}
        </Wrapper>
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
  isSecondary: PropTypes.bool,
};

ButtonLink.defaultProps = {
  children: null,
  href: null,
  isSecondary: false,
};
