import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Image, Body, Name, Role } from "./User.styles";

export default function User({ image, internalRole, name, onClick }) {
  const hasImage = image.length > 0;

  return (
    <Wrapper {...{ onClick }}>
      <Image src={hasImage && image} as={!hasImage && "div"} />
      <Body>
        <Name>{name}</Name>
        <Role>{internalRole}</Role>
      </Body>
    </Wrapper>
  );
}

User.propTypes = {
  image: PropTypes.string,
  internalRole: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

User.defaultProps = {
  image: null,
  internalRole: null,
  name: null,
  onClick: () => {},
};
