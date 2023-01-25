import React from "react";
import Drawer from "./drawer";
import Navbar from "./navbar";
import Login from "../login";
import { useAuth } from "../../context/auth";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, loading } = useAuth();

  if (loading && !user) {
    return <></>;
  }

  // if (!loading && !user) {
  //   return <Login />;
  // }
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} />
      <div className="max-w-6xl mx-auto">{children}</div>
    </>
  );
};

export default Layout;
