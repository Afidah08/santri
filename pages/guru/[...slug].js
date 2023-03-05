import React from "react";
import Error from "next/error";
import moment from "moment/moment";

export async function getServerSideProps({ params }) {
  return {
    props: { slug: params.slug },
  };
}

const Edit = ({ slug }) => {
  const [form, setForm] = React.useState({});

  if (slug.length != 2 || slug[1] != "edit") {
    return <Error statusCode={404} />;
  }

  const {
    data: guruData,
    loading: guruLoading,
    error: guruError,
  } = useQuery("GET", `/api/guru/${slug[0]}`);

  React.useEffect(() => {
    if (guruData) {
      setForm({ ...guruData[0].guruData[0] });
    }
  }, [guruData]);

  console.log(slug);

  return (
    <section className=" bg-slate-800">
      <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-white ">
        DATA Guru
      </h1>
      <form>
        <>
          <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="NIK"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NIK
              </label>
              <input
                type="text"
                defaultValue={guruData[0].NIK}
                id="NIK"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi NIK"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="nama_lengkap"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                defaultValue={guruData[0].Nama_lengkap}
                id="nama_lengkap"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi nama lengkap"
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
                defaultValue={moment(guruData[0].Tanggal_lahir).format(
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
                defaultValue={guruData[0].Jenis_kelamin}
                name="laki-laki"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="lk">Laki-laki</option>
                <option value="pr">Perempuan</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="pendidikan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pendidikan
              </label>
              <input
                type="text"
                defaultValue={guruData[0].Pendidikan}
                id="pendidikan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" isi pendidikan terakhir"
                required
              ></input>
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
                defaultValue={guruData[0].Alamat}
                id="alamat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="isi alamat lengkap"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="wali_kelas"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Wali Kelas
              </label>
              <input
                type="number"
                defaultValue={guruData[0].Wali_kelas}
                id="wali_kelas"
                min="1"
                max="5"
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

export default Edit;
