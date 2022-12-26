import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoEaselOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Jumlah Santri",
      jumlah: 83,
      icon: (
        <IoPersonOutline className="bg-blue-200 p-2 rounded-full text-5xl ml-2 text-blue-500" />
      ),
    },
    {
      id: 2,
      title: "Jumlah Kelas",
      jumlah: 5,
      icon: (
        <IoEaselOutline className="bg-blue-200 p-2 rounded-full text-5xl ml-2 text-blue-500" />
      ),
    },
    {
      id: 3,
      title: "Jumlah Alumni",
      jumlah: 54,
      icon: (
        <IoSchoolOutline className="bg-blue-200 p-2 rounded-full text-5xl ml-2 text-blue-500" />
      ),
    },
  ];

  return (
    <>
      <div className=" bg-slate-300 h-screen flex items-center justify-center">
        <div className="grid grid-cols-3 gap-10">
          {data.map((items) => (
            <div
              key={items.id}
              className=" text-justify px-10 py-10 shadow-2xl bg-white flex items-center justify-between space-x-4"
            >
              <div>
                <h2>{items.title}</h2>
                <p>{items.jumlah}</p>
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
