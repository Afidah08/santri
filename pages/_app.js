import "../styles/globals.css";
import Navbar from "../components/layout/navbar";
import Drawer from "../components/layout/drawer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Drawer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
