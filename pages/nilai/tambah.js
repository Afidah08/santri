import React, { useState } from "react";
import useMutation from "../../hooks/useMutation";

const Test = () => {
  // state form
  const [form, setForm] = useState({});
  // add santri
  const addSantri = useMutation("POST", "/api/santri");

  // submit form
  const onSubmitForm = (e) => {
    e.preventDefault();
    addSantri.mutate(form, "/nilai");
    console.log(form);
  };

  // onchange form
  const onChangeForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <section className=" mt-28 mb-10">
      <form onSubmit={onSubmitForm}>
        <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-white ">
          DATA SANTRI
        </h1>
        <div className="grid gap-6  mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="Nama_lengkap"
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
              htmlFor="Nama_panggilan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Panggilan
            </label>
            <input
              type="text"
              id="Nama_panggilan"
              onChange={(e) => onChangeForm("Nama_panggilan", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="isi nama panggilan"
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="Tanggal_lahir"
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
              htmlFor="Jenis_kelamin"
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
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Alamat"
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
              htmlFor="Diterima_pada_tanggal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Diterima Pada Tanggal
            </label>
            <input
              type="datetime-local"
              id="Diterima_pada_tanggal"
              onChange={(e) =>
                onChangeForm("Diterima_pada_tanggal", e.target.value)
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="Sekolah_formal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sekolah Formal
            </label>
            <input
              type="text"
              id="Sekolah_formal"
              onChange={(e) => onChangeForm("Sekolah_formal", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" isi nama sekolah"
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="Kelas_sekolah"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Kelas di Sekolah
            </label>
            <input
              type="number"
              id="Kelas_sekolah"
              onChange={(e) => onChangeForm("Kelas_sekolah", e.target.value)}
              min="1"
              max="12"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              status :
            </label>
            <select
              onChange={(e) => onChangeForm("Status", e.target.value)}
              id="pilih_status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected>Pilih status</option>
              <option value="Aktif">Aktif</option>
              <option value="Lulus">Lulus</option>
              <option value="Mutasi">Mutasi</option>
            </select>
          </div>
        </div>

        <p className=" text-center text-xl mb-10 mt-16 font-bold text-white ">
          KRITERIA
        </p>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="kemampuan"
              className="block mb-2 text-sm font-medium text-black dark:text-white"
            >
              Kemampuan
            </label>
            <select
              onChange={(e) => onChangeForm("Kemampuan", e.target.value)}
              id="Kemampuan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected className=" text-gray-500">
                Pilih nilai Kemampuan
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="Komitmen"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Komitmen
            </label>
            <select
              onChange={(e) => onChangeForm("Komitmen", e.target.value)}
              id="Komitmen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected className="text-gray-500">
                Pilih nilai Komitmen
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Riwayat_pendidikan_non_formal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Riwayat Pendidikan Non Formal
            </label>
            <select
              onChange={(e) =>
                onChangeForm("Riwayat_pendidikan_non_formal", e.target.value)
              }
              id="Riwayat_pendidikan_non_formal"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected className="text-gray-500">
                Pilih Riwayat Pendidikan Non Formal
              </option>
              <option value="5">Pernah belajar di TPA dan MADIN</option>
              <option value="4">Pernah belajar di MADIN</option>
              <option value="3">Pernah belajar di TPA</option>
              <option value="2">
                Tidak pernah belajar di TPA dan MADIN, tetapi mengikuti Majelis
                Taklim
              </option>
              <option value="1">
                Tidak pernah belajar di TPA dan MADIN, dan tidak pernah
                mengikuti Majelis Taklim
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Test;
