import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const MyMenu = ({ menu, content }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {menu}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-800 rounded-md bg-gray-800 border border-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {content}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MyMenu;
