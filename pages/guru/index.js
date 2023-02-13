import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import useMutation from "../../hooks/useMutation";

const Guru = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [deletedId, setDeletedId] = React.useState(null);

  // fetching data
  const fetchingData = async () => {
    setLoading(true);
    const response = await fetch("/api/guru", {
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

  // Delete Guru
  const deleteGuru = useMutation("DELETE", "/api/guru");

  // delete method
  const onDelete = (id) => {
    const popup = window.confirm("Apakah yakin ingin menghapus?");
    if (popup) {
      deleteGuru.mutate({ id_guru: id }, `/guru`);
      setDeletedId(id);
    }
  };

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
        <div class="relative rounded-md overflow-hidden h-[calc(100vh-65px)] pt-24">
          <a href="/guru/tambah">
            <button className="float-right text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark: bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-900">
              + Tambah Data
            </button>
          </a>
          <div className="h-[calc(100vh-65px-150px)] w-full overflow-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-700 rounded-lg">
              <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    NIK
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Nama Lengkap
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Tanggal Lahir
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Jenis Kelamin
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Pendidikan
                  </th>
                  <th scope="col" class="px-6 py-4  whitespace-nowrap">
                    Alamat
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Wali Kelas
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((guru) => (
                  <tr class="dark:border border-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {guru.NIK}
                    </th>
                    <td class="px-6 py-4">{guru.Nama_lengkap}</td>
                    <td class="px-6 py-4">
                      {moment(guru.Tanggal_lahir).format("DD/MM/YYYY")}
                    </td>
                    <td class="px-6 py-4">{guru.Jenis_kelamin}</td>
                    <td class="px-6 py-4">{guru.Pendidikan}</td>
                    <td class="px-6 py-4">{guru.Alamat}</td>
                    <td class="px-6 py-4">{guru.Wali_kelas}</td>
                    <td class="px-6 py-4 flex">
                      {
                        <Link href={`/${guru.id_guru}/edit`}>
                          <button
                            data-modal-target="authentication-modal"
                            data-modal-toggle="authentication-modal"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            type="button"
                          >
                            Edit
                          </button>
                        </Link>
                      }
                      <button
                        onClick={() => onDelete(guru.id_guru)}
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
        </div>
      </main>
    </>
  );
};

export default Guru;
