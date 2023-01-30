import React from "react";
import Error from "next/error";

export async function getServerSideProps({ params }) {
  return {
    props: { slug: params.slug },
  };
}

const Edit = ({ slug }) => {
  if (slug.length != 2 || slug[1] != "edit") {
    return <Error statusCode={404} />;
  }

  console.log(slug);

  return (
    <section className=" bg-slate-800">
      <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-white ">
        DATA NILAI
      </h1>
      <form>
        <>
          <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
            <div>
              <label
                for="Nama "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi Nama"
                required
              ></input>
            </div>
            <div>
              <label
                for="tahun_ajaran"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tahun Ajaran
              </label>
              <select
                id="tahun_ajaran"
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
                for="semester"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Semester
              </label>
              <select
                id="semester"
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
                for="nilai_tajwid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nilai Tajwid
              </label>
              <input
                type="number"
                id="nilai_tajwid"
                min="5"
                max="9"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="nilai_tauhid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nilai Tauhid
              </label>
              <input
                type="number"
                id="nilai_tajwid"
                min="5"
                max="9"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="nilai_akhlak"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nilai Akhlak
              </label>
              <input
                type="number"
                id="nilai_akhlak"
                min="5"
                max="9"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="nilai_fikih"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nilai Fikih
              </label>
              <input
                type="number"
                id="nilai_fikih"
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
        </>
      </form>
    </section>
  );
};
