import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { MdStickyNote2 } from "react-icons/md";

const Drawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-[16.8rem]"
      } sticky top-0`}
    >
      <div
        id="drawer-navigation"
        className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          data-drawer-dismiss="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IoChevronForwardSharp className="bg-blue-700 p-2 rounded-full text-4xl ml-2 text-white" />

          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BsFillBarChartFill className=" text-2xl text-gray-400" />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/test"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <IoPersonSharp className=" text-2xl text-gray-400 " />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Data Siswa
                </span>
              </a>
            </li>
            <li>
              <a
                href="/nilai"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdStickyNote2 className=" text-3xl text-gray-400 " />
                <span className="flex-1 ml-3 whitespace-nowrap">Nilai</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <IoLogOutSharp className=" text-3xl text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
