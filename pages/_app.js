import "../styles/globals.css";
import React from "react";
import Layout from "../components/layout/layout";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const [noSSR, setNoSSR] = React.useState(false);

  React.useEffect(() => {
    setNoSSR(true);
  }, []);

  return (
    <>
      <Toaster />
      {noSSR && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
