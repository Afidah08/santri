import React, { useState } from "react";
import useMutation from "../../hooks/useMutation";

const Nilairapot = () => {
  // state form
  const [form, setForm] = useState({});
  const addRapot = useMutation("POST", "/api/rapot");

  // submit form
  const onSubmitForm = (e) => {
    e.preventDefault();
    addRapot.mutate(form, "/rapot");
    console.log(form);
  };

  // onchange form
  const onChangeForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <section className=" bg-slate-800">
      <form onSubmit={onSubmitForm}>
        <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-white ">
          DATA NILAI
        </h1>
        <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
          <div>
            <label
              for="id_santri "
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ID santri
            </label>
            <input
              onChange={(e) => onChangeForm("id_santri", e.target.value)}
              type="text"
              id="id_santri"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="masukkan id"
              required
            ></input>
          </div>
          <div>
            <label
              for="Tahun_ajaran"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tahun Ajaran
            </label>
            <select
              onChange={(e) => onChangeForm("Tahun_ajaran", e.target.value)}
              id="Tahun_ajaran"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected>Pilih Tahun Ajaran</option>
              <option value="2018 - 2019">2018 - 2019</option>
              <option value="2019 - 2020">2019 - 2020</option>
              <option value="2020 - 2021">2020 - 2021</option>
              <option value="2021 - 2022">2021 - 2022</option>
            </select>
          </div>
          <div>
            <label
              for="Semester"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Semester
            </label>
            <select
              onChange={(e) => onChangeForm("Semester", e.target.value)}
              id="Semester"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected>Pilih Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div>
            <label
              for="Mapel_tajwid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Tajwid
            </label>
            <input
              onChange={(e) => onChangeForm("Mapel_tajwid", e.target.value)}
              type="number"
              id="Mapel_tajwid"
              min="5"
              max="9"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="Mapel_tauhid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Tauhid
            </label>
            <input
              onChange={(e) => onChangeForm("Mapel_tauhid", e.target.value)}
              type="number"
              id="Mapel_tauhid"
              min="5"
              max="9"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="Mapel_akhlak"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Akhlak
            </label>
            <input
              onChange={(e) => onChangeForm("Mapel_akhlak", e.target.value)}
              type="number"
              id="Mapel_akhlak"
              min="5"
              max="9"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="Mapel_fikih"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Fikih
            </label>
            <input
              onChange={(e) => onChangeForm("Mapel_fikih", e.target.value)}
              type="number"
              id="Mapel_fikih"
              min="5"
              max="9"
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

export default Nilairapot;
