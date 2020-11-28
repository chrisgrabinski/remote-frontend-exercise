import styled from "styled-components";

import { colors } from "../../config/theme";

export const Wrapper = styled.button`
  align-items: center;
  background-color: ${({ isSecondary }) =>
    !isSecondary ? colors.purple : "transparent"};
  border-radius: 9001px; // I know…but at least it's over 9000
  border: ${({ isSecondary }) =>
    isSecondary &&
    `2px solid ${colors.purple}4D`}; // TODO: This should probably be more human-readable
  color: ${({ isSecondary }) => (!isSecondary ? colors.white : colors.purple)};
  display: inline-flex;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  line-height: 1.2;
  min-width: 140px;
  padding: 0 24px;
`;
