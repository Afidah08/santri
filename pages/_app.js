import "../styles/globals.css";
import React from "react";
import Layout from "../components/layout/layout";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/auth";

function MyApp({ Component, pageProps }) {
  const [noSSR, setNoSSR] = React.useState(false);

  React.useEffect(() => {
    setNoSSR(true);
  }, []);

  return (
    <>
      <Toaster />
      {noSSR && (
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      )}
    </>
  );
}

export default MyApp;
