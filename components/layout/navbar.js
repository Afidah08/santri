import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MyMenu from "../menu";
import { toast } from "react-hot-toast";
import supabase from "../../lib/supabase";
import { useAuth } from "../../context/auth";

const Navbar = ({ setIsOpen, isOpen }) => {
  const { user } = useAuth();

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Ada yang salah");
    } else {
      toast.success("Berhasil logout");
    }
  };

  return (
    <nav className="bg-white z-50 py-4 px-2 sm:px-4 dark:bg-gray-800 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>
        <div className="flex items-center md:order-2">
          <MyMenu
            menu={
              <span className="bg-gray-500 rounded-full w-9 aspect-square flex items-center justify-center p-1 uppercase">
                {user?.email[0]}
              </span>
            }
            content={
              <ul className="p-5">
                <li>
                  <button onClick={onSignOut}>Logout</button>
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
