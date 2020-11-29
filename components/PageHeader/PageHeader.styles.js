import styled from "styled-components";

import { colors } from "../../constants/theme";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 56px;
`;

export const Heading = styled.div`
  align-items: baseline;
  display: flex;
`;

export const Title = styled.h1`
  color: ${colors.darkGrey};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 13px;
  margin-left: 8px;
`;

export const Action = styled.div`
  margin-left: auto;
`;
