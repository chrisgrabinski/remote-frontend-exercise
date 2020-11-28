import styled from "styled-components";

import { colors } from "../../config/theme";

import BaseContainer from "../../components/Container";

export const Wrapper = styled.header`
  background-color: ${colors.white};
  padding: 20px 0;
`;

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: flex-end;
`;
