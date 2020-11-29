import styled from "styled-components";

import { colors } from "../../constants/theme";

const semiTransparentPurple = `${colors.purple}4D`;

export const Wrapper = styled.button`
  align-items: center;
  background-color: ${({ isSecondary }) =>
    !isSecondary ? colors.purple : "transparent"};
  border-radius: 9001px; // I know…but at least it's over 9000
  border: ${({ isSecondary }) =>
    isSecondary && `2px solid ${semiTransparentPurple}`};
  box-shadow: ${({ isHighlight }) =>
    isHighlight && `0px 6px 12px ${semiTransparentPurple}`};
  color: ${({ isSecondary }) => (!isSecondary ? colors.white : colors.purple)};
  display: inline-flex;
  font-weight: 500;
  height: ${({ size }) => (size === "lg" ? "45px" : "40px")};
  justify-content: center;
  line-height: 1.2;
  min-width: 140px;
  padding: 0 24px;

  &:focus {
    outline: 0;
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
  margin-top: -1px;
`;
