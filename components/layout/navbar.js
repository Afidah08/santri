import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = ({ setIsOpen, isOpen }) => {
  return (
    <nav className="bg-white z-50 py-4 px-2 sm:px-4 dark:bg-gray-800 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://cdn.memes.com/up/72001041603845438/i/1659488366933.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
