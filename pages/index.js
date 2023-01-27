import React from "react";
import {
  IoPersonOutline,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoEaselOutline,
} from "react-icons/io5";
import useQuery from "../hooks/useQuery";

const Home = () => {
  const {
    data: totalData,
    loading: totalLoading,
    error: totalError,
  } = useQuery("GET", "/api/count");

  const iconClass = "bg-gray-600 p-2 rounded-full text-5xl ml-2 text-white";

  const icons = [
    <IoPersonOutline className={iconClass} />,
    <IoEaselOutline className={iconClass} />,
    <IoSchoolOutline className={iconClass} />,
    <IoBriefcaseOutline className={iconClass} />,
  ];

  if (totalLoading) {
    return <></>;
  }

  return (
    <>
      <div className="h-[calc(100vh-65px)] pt-24 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 w-full">
          {totalData.map((items, index) => (
            <div
              key={items.index}
              className=" text-justify px-10 py-20 shadow-2xl bg-gray-800 border border-gray-700 rounded flex items-center justify-between space-x-4"
            >
              <div>
                <h2>{items.title}</h2>
                <p className="text-4xl my-2">{items.jumlah}</p>
              </div>
              {icons[index]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
