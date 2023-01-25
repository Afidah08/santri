import React from "react";

const Rapot = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
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
  console.log(data);

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
        <div class="relative rounded-md overflow-hidden h-[calc(100vh-65px)] pt-24">
          <a href="/nilairapot">
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
              {data.map((rapot) => (
                <tr class="dark:border border-gray-600">
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

export default Rapot;
