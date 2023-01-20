import React from "react";

const Rapot = () => {
  return (
    <>
      <main>
        <div class="relative rounded-md overflow-hidden h-[calc(100vh-65px)] pt-24">
          <a href="/tambahguru">
            <button className=" float-right mr-4 text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark: bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-900">
              + Tambah Data
            </button>
          </a>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-700 rounded-lg">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-4">
                  Kelas
                </th>
                <th scope="col" class="px-6 py-4">
                  Nama
                </th>
                <th scope="col" class="px-6 py-4">
                  Tahun Ajaran
                </th>
                <th scope="col" class="px-6 py-4">
                  Semester
                </th>
                <th scope="col" class="px-6 py-4">
                  Tajwid
                </th>
                <th scope="col" class="px-6 py-4  whitespace-nowrap">
                  Tauhid
                </th>
                <th scope="col" class="px-6 py-4">
                  Akhlak
                </th>
                <th scope="col" class="px-6 py-4">
                  Fikih
                </th>
                <th scope="col" class="px-6 py-4">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="dark:border border-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <td class="px-6 py-4">Nabila Annastasyah</td>
                <td class="px-6 py-4">2021-2022</td>
                <td class="px-6 py-4">II</td>
                <td class="px-6 py-4">8,0</td>
                <td class="px-6 py-4">9,0</td>
                <td class="px-6 py-4">7,0</td>
                <td class="px-6 py-4">8,0</td>
                <td class="px-6 py-4 flex">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Rapot;
