import React from "react";

const Keluar = () => {
  return (
    <div className=" flex max-w-4xl">
      <div className="bg-slate-300  min-h-screen flex text-black">
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
    </div>
  );
};

export default Keluar;
