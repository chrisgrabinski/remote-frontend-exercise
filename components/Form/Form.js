import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import ButtonGroup from "../ButtonGroup";
import Button from "../Button";

import {
  FormWrapper,
  Header,
  Title,
  Description,
  Body,
  BodyInner,
  Footer,
} from "./Form.styles";

export default function Form({
  children,
  description,
  onSubmit,
  primaryActionLabel,
  title,
}) {
  const router = useRouter();

  const handleButtonResetClick = () => {
    router.push("/");
  };

  return (
    <FormWrapper {...{ onSubmit }}>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <Body>
        <BodyInner>{children}</BodyInner>
      </Body>
      <Footer>
        <ButtonGroup>
          <Button isSecondary onClick={handleButtonResetClick}>
            Cancel
          </Button>
          <Button type="submit">{primaryActionLabel}</Button>
        </ButtonGroup>
      </Footer>
    </FormWrapper>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  description: PropTypes.string,
  onSubmit: PropTypes.func,
  primaryActionLabel: PropTypes.string,
  title: PropTypes.string,
};

Form.defaultProps = {
  children: null,
  description: null,
  onSubmit: () => {},
  primaryActionLabel: null,
  title: null,
};
