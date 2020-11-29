import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Heading,
  Title,
  Description,
  Action,
} from "./PageHeader.styles";

export default function PageHeader({ action, description, title }) {
  return (
    <Wrapper>
      <Heading>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Heading>
      <Action>{action}</Action>
    </Wrapper>
  );
}

PageHeader.propTypes = {
  action: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  action: null,
  description: null,
  title: null,
};
