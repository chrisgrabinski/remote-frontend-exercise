import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import "tailwindcss/dist/base.css";

import { EmployeesProvider } from "../context/EmployeesContext";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F4F7FC;
    color: #778CA3;
    font-family: 'Inter', sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <EmployeesProvider>
        <Component {...pageProps} />
      </EmployeesProvider>
    </>
  );
}

export default MyApp;
