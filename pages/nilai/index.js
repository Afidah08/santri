import React from "react";
import moment from "moment/moment";
import Modal from "../../components/modal";
import useMutation from "../../hooks/useMutation";
import useQuery from "../../hooks/useQuery";
import Loading from "../../components/loading";

const Nilai = () => {
  const [isCalculateOPen, setIsCalculateOpen] = React.useState(false);
  const [deletedId, setDeletedId] = React.useState(null);

  // mengambil data Santri
  const {
    data: santriData,
    loading: santriLoading,
    error: santriError,
  } = useQuery("GET", "/api/santri", deletedId);

  // menghitung AHP
  const {
    data: ahpData,
    loading: ahpLoading,
    error: ahpError,
  } = useQuery("GET", "/api/ahp", isCalculateOPen);

  // Delete santri
  const deleteSantri = useMutation("DELETE", "/api/santri");

  // delete method
  const onDelete = (id) => {
    const popup = window.confirm("Apakah yakin ingin menghapus?");
    if (popup) {
      deleteSantri.mutate({ id_santri: id }, `/nilai`);
      setDeletedId(id);
    }
  };

  if (santriLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Modal isOpen={isCalculateOPen} setIsOpen={setIsCalculateOpen}>
        <div className="py-3">
          <h1 className=" text-center text-xl font-bold text-white ">
            Hasil Perhitungan AHP
          </h1>
          {ahpLoading ? (
            <div className="h-[40vh] flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            <div>
              <pre>{JSON.stringify(ahpData, null, 2)}</pre>
            </div>
          )}
        </div>
      </Modal>
      <main>
        <div className="relative rounded-md overflow-hidden h-[calc(100vh-65px)] pt-24">
          <a href="/nilai/tambah">
            <button className="float-right text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark: bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-900">
              + Tambah Data
            </button>
          </a>
          <button
            onClick={() => setIsCalculateOpen(true)}
            className=" float-right mr-3 text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark: bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-900"
          >
            Hitung AHP
          </button>
          <div className="h-[calc(100vh-65px-150px)] w-full overflow-auto">
            <table class="w-full h-fit text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-700 rounded-lg">
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
                {santriData.map((santri) => (
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
                      {moment(santri.Diterima_pada_tanggal).format(
                        "DD/MM/YYYY"
                      )}
                    </td>
                    <td class="px-6 py-4">{santri.Status}</td>
                    <td class="px-6 py-4 flex">
                      {/* <Link href={`/${santri.id_santri}/edit`}>
                      <p>edit</p>
                    </Link> */}
                      <a href={`/nilai/${santri.id_santri}/edit`}>
                        <button
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          type="button"
                        >
                          Edit
                        </button>
                      </a>
                      <button
                        onClick={() => onDelete(santri.id_santri)}
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

export default Nilai;
