import styled, { createGlobalStyle } from "styled-components";

import { colors } from "../../constants/theme";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.lightBlue};
    color: ${colors.grey};
    font-family: 'Inter', sans-serif;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 40px 0;
`;
