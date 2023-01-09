import "../styles/globals.css";
import React from "react";
import Layout from "../components/layout/layout";
function MyApp({ Component, pageProps }) {
  const [noSSR, setNoSSR] = React.useState(false);

  React.useEffect(() => {
    setNoSSR(true);
  }, []);

  return (
    <>
      {noSSR && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
