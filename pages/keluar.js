import React from "react";

const login = () => {
  return (
    <section className=" bg-slate-800 flex">
      <div className="container max-w-sm bg-white m-auto p-10">
        <h1 className="text-3xl font-thin text-center">Form Login</h1>
        <form action="" className="mt-5">
          <label htmlFor="" className="block">
            <span className="block font-semibold text-sm">Alamat Email</span>
            <input
              type="text"
              className=" block mt-1 border border-sky-400 rounded-md"
            ></input>
          </label>
          <label htmlFor="" className="block">
            <span className="block font-semibold text-sm">Password</span>
            <input
              type="text"
              className=" block mt-1 border border-sky-400 rounded-md"
            ></input>
          </label>
          <button className="mt-4 text-sm bg-sky-800 border border-1 px-2 py-1 rounded-md text-white>
        </form>
      </div>
    </section>
  );
};

export default login;
