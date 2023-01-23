import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoEaselOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Jumlah Santri",
      jumlah: 83,
      icon: (
        <IoPersonOutline className="bg-gray-600 p-2 rounded-full text-5xl ml-2 text-white" />
      ),
    },
    {
      id: 2,
      title: "Jumlah Kelas",
      jumlah: 5,
      icon: (
        <IoEaselOutline className="bg-gray-600 p-2 rounded-full text-5xl ml-2 text-white" />
      ),
    },
    {
      id: 3,
      title: "Jumlah Alumni",
      jumlah: 54,
      icon: (
        <IoSchoolOutline className="bg-gray-600 p-2 rounded-full text-5xl ml-2 text-white" />
      ),
    },
    {
      id: 4,
      title: "Jumlah Guru",
      jumlah: 13,
      icon: (
        <IoBriefcaseOutline className="bg-gray-600 p-2 rounded-full text-5xl ml-2 text-white" />
      ),
    },
  ];

  return (
    <>
      <div className="h-[calc(100vh-65px)] pt-24 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-10 w-full">
          {data.map((items) => (
            <div
              key={items.id}
              className=" text-justify px-10 py-20 shadow-2xl bg-gray-800 border border-gray-700 rounded flex items-center justify-between space-x-4"
            >
              <div>
                <h2>{items.title}</h2>
                <p className="text-4xl my-2">{items.jumlah}</p>
              </div>
              {items.icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
