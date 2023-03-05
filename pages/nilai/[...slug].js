import React from "react";
import Error from "next/error";
import useQuery from "../../hooks/useQuery";
import Loading from "../../components/loading";
import moment from "moment/moment";

export async function getServerSideProps({ params }) {
  return {
    props: { slug: params.slug },
  };
}

const Edit = ({ slug }) => {
  // state form
  const [form, setForm] = React.useState({});

  if (slug.length != 2 || slug[1] != "edit") {
    return <Error statusCode={404} />;
  }

  const {
    data: santriData,
    loading: santriLoading,
    error: santriError,
  } = useQuery("GET", `/api/santri/${slug[0]}`);

  React.useEffect(() => {
    if (santriData) {
      setForm({ ...santriData[0], ...santriData[0].Kriteria[0] });
    }
  }, [santriData]);

  if (santriLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <section className=" mt-28">
      <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-white ">
        DATA SANTRI
      </h1>
      <form>
        <>
          <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="nama_lengkap"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                defaultValue={santriData[0].Nama_lengkap}
                id="nama_lengkap"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi nama lengkap"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="nama_panggilan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Panggilan
              </label>
              <input
                type="text"
                defaultValue={santriData[0].Nama_panggilan}
                id="nama_panggilan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi nama panggilan"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="tanggal_lahir"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tanggal Lahir
              </label>
              <input
                type="date"
                defaultValue={moment(santriData[0].Tanggal_lahir).format(
                  "YYYY-MM-DD"
                )}
                id="tanggal_lahir"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="lk"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Jenis Kelamin :
              </label>
              <select
                id="pilih_jenis_kelamin"
                defaultValue={santriData[0].Jenis_kelamin}
                name="laki-laki"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option>Pilih jenis Kelamin</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Alamat
              </label>
              <input
                type="text"
                defaultValue={santriData[0].Alamat}
                id="alamat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi alamat lengkap"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="diterima_pada_tanggal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Diterima Pada Tanggal
              </label>
              <input
                type="datetime-local"
                defaultValue={santriData[0].Diterima_pada_tanggal}
                id="diterima_pada_tanggal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="sekolah_formal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Sekolah Formal
              </label>
              <input
                type="text"
                defaultValue={santriData[0].Sekolah_formal}
                id="sekolah_formal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" isi nama sekolah"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="kelas_di_sekolah"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kelas di Sekolah
              </label>
              <input
                type="number"
                defaultValue={santriData[0].Kelas_sekolah}
                id="kelas_di_sekolah"
                min="1"
                max="12"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lk"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                status :
              </label>
              <select
                id="pilih_status"
                defaultValue={santriData[0].Status}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option>Pilih status</option>
                <option value="Aktif">Aktif</option>
                <option value="Lulus">Lulus</option>
                <option value="Mutasi">Mutasi</option>
              </select>
            </div>
          </div>
        </>
      </form>
      <>
        <p className="  text-center text-xl mb-5 mt-5 font-bold text-white w-screen">
          KRITERIA
        </p>
      </>
      <form>
        <>
          <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="kemampuan"
                className="block mb-2 text-sm font-medium text-black dark:text-white"
              >
                Kemampuan
              </label>
              <select
                defaultValue={santriData[0].Kriteria[0].Kemampuan}
                id="nilai_kemampuan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option className=" text-gray-500">
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
                htmlFor="komitmen"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Komitmen
              </label>
              <select
                defaultValue={santriData[0].Kriteria[0].Komitmen}
                id="nilai_komitmen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option className="text-gray-500">Pilih nilai Komitmen</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="riwayat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Riwayat Pendidikan Non Formal
              </label>
              <select
                defaultValue={
                  santriData[0].Kriteria[0].Riwayat_pendidikan_non_formal
                }
                id="riwayat_pendidikan_non_formal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option className="text-gray-500">
                  Pilih Riwayat Pendidikan Non Formal
                </option>
                <option value="Pernah_belajar_di_TPA_dan_MADIN">
                  Pernah belajar di TPA dan MADIN
                </option>
                <option value="Pernah_belajar_di_MADIN">
                  Pernah belajar di MADIN
                </option>
                <option value="Pernah_belajar_di_TPA">
                  Pernah belajar di TPA
                </option>
                <option value="Tidak_pernah_belajar_di_TPA_dan_MADIN,_tetapi_mengikuti_Majelis_Taklim">
                  Tidak pernah belajar di TPA dan MADIN, tetapi mengikuti
                  Majelis Taklim
                </option>
                <option value="Tidak_pernah_belajar_di_TPA_dan_MADIN,_dan_tidak_pernah_mengikuti_Majelis_Taklim">
                  Tidak pernah belajar di TPA dan MADIN, dan tidak pernah
                  mengikuti Majelis Taklim
                </option>
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

export default Edit;
