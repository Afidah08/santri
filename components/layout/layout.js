import React from "react";
import Drawer from "./drawer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} />
      <div className="max-w-5xl mx-auto">{children}</div>
    </>
  );
};

export default Layout;
