import React from "react";

const Keluar = () => {
  return (
    <div className=" flex max-w-4xl min-h-screen">
      <div className="bg-slate-300  flex text-black">
        <h2>Nama Panjang</h2>
        <p>Nama Panggilan</p>
        <p>Tanggal Lahir</p>
        <p>kewarganegaraan</p>
        <p>Jenis Kelamin</p>
        <p> Alamat</p>
        <p> Diterima Pada Tgl</p>
        <p>Sekolah Formal</p>
        <p>Kelas di Sekolah</p>
      </div>
      <div>
        <label className="block">
          <input
            type="text"
            name="text"
            className=" px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="masukkan nama"
          />
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="masukkan nama"
          />
          <input
            type="date"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="masukkan kewarganegaraan"
          />
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="masukkan nama"
          />
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="masukkan alamat"
          />
          <input
            type="date"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="masukkan nama"
          />
          <input
            type="integer"
            name="text"
            className="mt-1 px-3 py-2 text-white bg-slate-500 border shadow-sm border-slate-300 placeholder-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="masukkan nama"
          />
        </label>
      </div>

      <div className=" text-center text-black  "> Kriteria</div>
      <div className=" text-justify text-black ml-16">
        <p> 1. Kemampuan </p>
        <p> 2. Komitmen</p>
        <p> 3. Riwayat Pendidikan Non Formal</p>
        <ul role="list" class="marker: list-disc pl-5 space-y-3 text-black">
          <li> Pernah belajar di TPA dan Madin</li>
          <li> Pernah belajar di Madin</li>
          <li> Pernah belajar di TPA</li>
          <li>
            {" "}
            Tidak pernah belajar di TPA dan Madin,tetapi mengikuti Majelis
            Taklim
          </li>
          <li>
            {" "}
            Tidak pernah belajar di TPA dan Madin, dan tidak pernah mengikuti
            Majelis Taklim
          </li>
        </ul>
      </div>
      <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full py-0.5 px-4">
        Simpan
      </button>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
      >
        Edit
      </button>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  ></input>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      ></input>
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keluar;
