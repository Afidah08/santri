import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { MdStickyNote2 } from "react-icons/md";
import clsx from "clsx";
import Modal from "../modal";
import Link from "next/link";

const Drawer = ({ isOpen }) => {
  return (
    <>
      <div
        id="drawer-navigation"
        className={clsx(
          isOpen ? "" : " -translate-x-full",
          "fixed z-40 h-[calc(100vh-3.8rem)] duration-300 bottom-0 p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 shadow-md"
        )}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BsFillBarChartFill className=" text-2xl ml-1 text-gray-400" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/nilai"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <IoPersonSharp className=" text-2xl ml-1 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Data Santri
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/guru"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaChalkboardTeacher className=" text-2xl ml-1 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">Data Guru</span>
              </Link>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdStickyNote2 className=" text-2xl ml-1 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Data Nilai
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <IoLogOutSharp className=" text-2xl rounded-sm ml-1 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
