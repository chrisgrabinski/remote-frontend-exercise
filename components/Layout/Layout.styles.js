import styled, { createGlobalStyle } from "styled-components";

import { colors } from "../../config/theme";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.lightBlue};
    color: ${colors.lightGrey};
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
