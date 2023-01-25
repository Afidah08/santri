import React from "react";

const Login = () => {
  return (
    <section className=" bg-slate-800 flex">
      <div className="container mt-40 max-w-sm bg-slate-500 m-auto p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-thin text-slate-200 text-center">
          Form Login
        </h1>
        <form action="" className="mt-5">
          <label for="" className="block">
            <span className="block font-semibold text-slate-800 mx-5  text-sm">
              Alamat Email
            </span>
            <input
              type="text"
              className=" w-64 block mt-1 mx-5 p-1 text-slate-100 bg-slate-400 border border-blue-500 rounded-md"
              placeholder="emailmu@gmail.com"
            ></input>
          </label>
          <label for="" className="block mt-2">
            <span className="block font-semibold text-slate-800 mx-5 text-sm">
              Password
            </span>
            <input
              type="password"
              className=" block  w-64 mt-1 mx-5 p-1 text-slate-100 bg-slate-400 border border-blue-500 rounded-md"
              placeholder="********"
            ></input>
          </label>
          <button className="mt-4 mx-5 text-sm font-bold  bg-sky-700 hover:bg-sky-900 border border-1 px-28 py-2 rounded-md text-white ">
            LOGIN
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
