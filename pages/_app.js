import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Head from "next/head";
import "tailwindcss/dist/base.css";

import Layout from "../components/Layout";

const EmployeesProvider = dynamic(() => import("../context/EmployeesContext"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <EmployeesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EmployeesProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};
