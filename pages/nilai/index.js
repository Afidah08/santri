import React from "react";
import moment from "moment/moment";
import Link from "next/link";

const Nilai = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // fetching data
  const fetchingData = async () => {
    setLoading(true);
    const response = await fetch("/api/santri", {
      method: "GET",
    });
    const result = await response.json();
    if (result) {
      setData(result);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchingData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <main>
        <div className="relative rounded-md overflow-hidden h-[calc(100vh-65px)] pt-24">
          <Link href="/nilai/tambah">
            <button className=" float-right mr-4 text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark: bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-900">
              + Tambah Data
            </button>
          </Link>
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
                  TL
                </th>
                <th scope="col" class="px-6 py-4">
                  Jenis Kelamin
                </th>
                <th scope="col" class="px-6 py-4">
                  Alamat
                </th>
                <th scope="col" class="px-6 py-4  whitespace-nowrap">
                  Tanggal Masuk
                </th>
                <th scope="col" class="px-6 py-4">
                  Status
                </th>
                <th scope="col" class="px-6 py-4">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((santri) => (
                <tr class="dark:border border-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {santri.Kelas}
                  </th>
                  <td class="px-6 py-4">{santri.Nama_lengkap}</td>
                  <td class="px-6 py-4">
                    {moment(santri.Tanggal_lahir).format("DD/MM/YYYY")}
                  </td>
                  <td class="px-6 py-4">{santri.Jenis_kelamin}</td>
                  <td class="px-6 py-4">{santri.Alamat}</td>
                  <td class="px-6 py-4">
                    {moment(santri.Diterima_pada_tanggal).format("DD/MM/YYYY")}
                  </td>
                  <td class="px-6 py-4">{santri.Status}</td>
                  <td class="px-6 py-4 flex">
                    {/* <Link href={`/${santri.id_santri}/edit`}>
                      <p>edit</p>
                    </Link> */}
                    <button
                      data-modal-target="authentication-modal"
                      data-modal-toggle="authentication-modal"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      type="button"
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
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Nilai;
