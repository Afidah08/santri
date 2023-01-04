import React from "react";
import Drawer from "./drawer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} />
      <div className="max-w-7xl mx-auto pt-24 pb-10">{children}</div>
    </>
  );
};

export default Layout;
