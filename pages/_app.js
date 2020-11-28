import Head from "next/head";
import "tailwindcss/dist/base.css";

import { EmployeesProvider } from "../context/EmployeesContext";
import Layout from "../components/Layout";

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
      <EmployeesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EmployeesProvider>
    </>
  );
}

export default MyApp;
