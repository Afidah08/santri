import React from "react";
import supabase from "../lib/supabase";
import { toast } from "react-hot-toast";

const Login = () => {
  const [data, setData] = React.useState({ email: null, password: null });

  const onLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      toast.error("Ada yg salah");
    } else {
      toast.success("Berhasil login");
    }
  };

  const onChangeForm = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };
  return (
    <section className=" flex">
      <div className="container mt-40 max-w-sm bg-slate-500 m-auto p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-thin text-slate-200 text-center">
          Login Admin
        </h1>
        <form onSubmit={onLogin} className="mt-5">
          <label htmlFor="" className="block">
            <span className="block font-semibold text-slate-800 mx-5  text-sm">
              Alamat Email
            </span>
            <input
              onChange={(e) => onChangeForm(e, "email")}
              type="email"
              className=" w-64 block mt-1 mx-5 p-1 text-slate-100 bg-slate-400 border border-blue-500 rounded-md"
              placeholder="emailmu@gmail.com"
            ></input>
          </label>
          <label htmlFor="" className="block mt-2">
            <span className="block font-semibold text-slate-800 mx-5 text-sm">
              Password
            </span>
            <input
              onChange={(e) => onChangeForm(e, "password")}
              type="password"
              className=" block  w-64 mt-1 mx-5 p-1 text-slate-100 bg-slate-400 border border-blue-500 rounded-md"
              placeholder="********"
            ></input>
          </label>
          <button
            type="submit"
            className="mt-4 mx-5 w-64 text-sm font-bold  bg-sky-700 hover:bg-sky-900 border border-1 px-28 py-2 rounded-md text-white "
          >
            LOGIN
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
