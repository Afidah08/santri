import React from "react";

const Test = () => {
  return (
    <section className="bg-slate-300">
      <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-black ">
        DATA SANTRI
      </h1>
      <form>
        <>
          {" "}
          <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
            <div>
              <label
                for="nama_panjang"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nama Panjang
              </label>
              <input
                type="text"
                id="nama_panjang"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi nama panjang"
                required
              ></input>
            </div>
            <div>
              <label
                for="nama_panggilan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nama Panggilan
              </label>
              <input
                type="text"
                id="nama_panggilan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi nama panggilan"
                required
              ></input>
            </div>
            <div>
              <label
                for="tanggal_lahir"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="tanggal_lahir"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              ></input>
            </div>
            <div>
              <label
                for="lk"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Jenis Kelamin :
              </label>
              <select
                id="pilih_jenis_kelamin"
                name="laki-laki"
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
                for="alamat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi alamat lengkap"
                required
              ></input>
            </div>
            <div>
              <label
                for="diterima_pada_tanggal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Diterima Pada Tanggal
              </label>
              <input
                type="datetime-local"
                id="diterima_pada_tanggal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>
            <div>
              <label
                for="sekolah_formal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Sekolah Formal
              </label>
              <input
                type="text"
                id="sekolah_formal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" isi nama sekolah"
                required
              ></input>
            </div>
            <div>
              <label
                for="kelas_di_sekolah"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Kelas di Sekolah
              </label>
              <input
                type="number"
                id="kelas_di_sekolah"
                min="1"
                max="12"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>{" "}
        </>
      </form>
      <>
        <p className="  text-center text-xl mb-5 mt-5 font-bold text-black w-screen">
          KRITERIA
        </p>
      </>
      <form>
        <>
          {" "}
          <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
            <div>
              <label
                for="kemampuan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Kemampuan
              </label>
              <select
                id="nilai_kemampuan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option selected>Pilih nilai Kemampuan</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label
                for="komitmen"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Komitmen
              </label>
              <select
                id="nilai_komitmen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option selected>Pilih nilai Komitmen</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </>
      </form>

      <button
        type="submit"
        className="text-white bg-blue-700 ml-14 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </section>
  );
};

export default Test;
