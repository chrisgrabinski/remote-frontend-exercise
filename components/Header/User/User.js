import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Image, Body, Name, Role } from "./User.styles";

export default function User({ image, name, onClick, role }) {
  const hasImage = image.length > 0;

  return (
    <Wrapper {...{ onClick }}>
      <Image src={hasImage && image} as={!hasImage && "div"} />
      <Body>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Body>
    </Wrapper>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  role: PropTypes.string,
};

User.defaultProps = {
  image: null,
  name: null,
  onClick: () => {},
  role: null,
};
