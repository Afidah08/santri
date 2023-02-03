import React, { useState } from "react";
import useMutation from "../../hooks/useMutation";

const Tambah = () => {
  const [form, setForm] = useState({});
  const addGuru = useMutation("POST", "/api/guru");

  const onSubmitForm = (e) => {
    e.preventDefault();
    addGuru.mutate(form, "/guru");
    console.log(form);
  };

  const onChangeForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <section className=" mt-28 mb-10">
      <form onSubmit={onSubmitForm}>
        <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-white ">
          DATA Guru
        </h1>
        <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
          <div>
            <label
              for="NIK"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              NIK
            </label>
            <input
              type="text"
              id="NIK"
              onChange={(e) => onChangeForm("NIK", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="isi NIK"
              required
            ></input>
          </div>
          <div>
            <label
              for="Nama_lengkap"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="Nama_lengkap"
              onChange={(e) => onChangeForm("Nama_lengkap", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="isi nama lengkap"
              required
            ></input>
          </div>
          <div>
            <label
              for="Tanggal_lahir"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="Tanggal_lahir"
              onChange={(e) => onChangeForm("Tanggal_lahir", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            ></input>
          </div>
          <div>
            <label
              for="Jenis_kelamin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Kelamin :
            </label>
            <select
              id="pilih_jenis_kelamin"
              onChange={(e) => onChangeForm("Jenis_kelamin", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected>Pilih jenis Kelamin</option>
              <option value="lk">Laki-laki</option>
              <option value="pr">Perempuan</option>
            </select>
          </div>
          <div>
            <label
              for="Pendidikan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pendidikan
            </label>
            <input
              type="text"
              id="Pendidikan"
              onChange={(e) => onChangeForm("Pendidikan", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" isi pendidikan terakhir"
              required
            ></input>
          </div>
          <div>
            <label
              for="Alamat"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Alamat
            </label>
            <input
              type="text"
              id="Alamat"
              onChange={(e) => onChangeForm("Alamat", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="isi alamat lengkap"
              required
            ></input>
          </div>
          <div>
            <label
              for="Wali_kelas"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Wali Kelas
            </label>
            <input
              type="number"
              id="Wali_kelas"
              onChange={(e) => onChangeForm("Wali_kelas", e.target.value)}
              min="0"
              max="5"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 ml-14 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Tambah;
