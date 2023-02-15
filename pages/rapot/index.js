import Link from "next/link";
import React from "react";
import useMutation from "../../hooks/useMutation";

const Rapot = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [deletedId, setDeletedId] = React.useState(null);

  // fetching data
  const fetchingData = async () => {
    setLoading(true);
    const response = await fetch("/api/rapot", {
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

  // Delete Rapot
  const deleteRapot = useMutation("DELETE", "/api/rapot");

  // delete method
  const onDelete = (id) => {
    const popup = window.confirm("Apakah yakin ingin menghapus?");
    if (popup) {
      deleteRapot.mutate({ id_rapot: id }, `/rapot`);
      setDeletedId(id);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <loading />
      </div>
    );
  }

  return (
    <>
      <main>
        <div class="relative rounded-md overflow-hidden h-[calc(100vh-65px)] pt-24">
          <a href="/rapot/tambah">
            <button className="float-right text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark: bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-900">
              + Tambah Data
            </button>
          </a>
          <div className="h-[calc(100vh-65px-150px)] w-full overflow-auto">
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
                {data.map((rapot) => (
                  <tr key={rapot.id_rapot} class="dark:border border-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rapot.id_santri.id_kelas.Nama_kelas}
                    </th>
                    <td class="px-6 py-4">{rapot.id_santri.Nama_panggilan}</td>
                    <td class="px-6 py-4">{rapot.Tahun_ajaran}</td>
                    <td class="px-6 py-4">{rapot.Semester}</td>
                    <td class="px-6 py-4">{rapot.Mapel_tajwid}</td>
                    <td class="px-6 py-4">{rapot.Mapel_tauhid}</td>
                    <td class="px-6 py-4">{rapot.Mapel_akhlak}</td>
                    <td class="px-6 py-4">{rapot.Mapel_fikih}</td>
                    <td class="px-6 py-4 flex">
                      {
                        <Link href={`/${rapot.id_rapot}/edit`}>
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
                        onClick={() => onDelete(rapot.id_rapot)}
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

export default Rapot;
