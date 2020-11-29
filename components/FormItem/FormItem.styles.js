import styled from "styled-components";

import { colors } from "../../config/theme";

export const Wrapper = styled.label`
  color: ${colors.lightGrey};
  display: grid;
  font-size: 13px;
  gap: 8px;
  line-height: 1.2;
`;

export const Label = styled.span`
  transition: color 150ms ease-in-out;

  ${Wrapper}:focus-within & {
    color: ${colors.purple};
  }
`;

export const Body = styled.div`
  border-bottom: 1px solid #ced5db;
  transition: border-color 150ms ease-in-out;

  &:focus-within {
    border-color: ${colors.purple};
  }

  input,
  select {
    color: ${colors.grey};
    display: block;
    font-size: 18px;
    padding: 8px 0;
    width: 100%;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${colors.grey};
    }
  }
`;

export const Hint = styled.p``;
