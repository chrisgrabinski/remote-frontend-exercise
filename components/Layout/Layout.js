import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import Container from "../../components/Container";

import { GlobalStyle, Page, Main } from "./Layout.styles";

export default function Layout({ children }) {
  return (
    <Page>
      <GlobalStyle />
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Page>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Layout.defaultProps = {
  children: null,
};
