import React from "react";
import Error from "next/error";
import useMutation from "../../hooks/useMutation";
import useQuery from "../../hooks/useQuery";
import Loading from "../../components/loading";

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

  const updateRapot = useMutation("PUT", "/api/rapot");

  const onSubmitForm = (e) => {
    e.preventDefault();
    updateRapot.mutate(form, null);
  };

  const onChangeForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const {
    data: rapotData,
    loading: rapotLoading,
    error: rapotError,
  } = useQuery("GET", `/api/rapot/${slug[0]}`);

  const {
    data: santriData,
    loading: santriLoading,
    error: santriError,
  } = useQuery("GET", "/api/santri");

  React.useEffect(() => {
    if (rapotData) {
      setForm({ ...rapotData[0], ...rapotData[0] });
    }
  }, [rapotData]);

  if (rapotLoading || santriLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <section className=" bg-slate-800">
      <form onSubmit={onSubmitForm}>
        <h1 className=" text-center text-xl mb-10 mt-5 font-bold text-white ">
          DATA NILAI
        </h1>
        <div className=" grid gap-6 ml-24 mr-20 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="tahun_ajaran"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama
            </label>
            <select
              onChange={(e) => onChangeForm("id_santri", e.target.value)}
              defaultValue={rapotData[0].id_santri}
              disabled={true}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected>Pilih Santri</option>
              {santriData.map((santri) => (
                <option value={santri.id_santri}>{santri.Nama_lengkap}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="semester"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Semester
            </label>
            <select
              onChange={(e) => onChangeForm("Semester", e.target.value)}
              defaultValue={rapotData[0].Semester}
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
              htmlFor="nilai_tajwid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Tajwid
            </label>
            <input
              type="number"
              onChange={(e) => onChangeForm("Mapel_tajwid", e.target.value)}
              defaultValue={rapotData[0].Mapel_tajwid}
              id="nilai_tajwid"
              min="5"
              max="9"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nilai_tauhid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Tauhid
            </label>
            <input
              type="number"
              onChange={(e) => onChangeForm("Mapel_tauhid", e.target.value)}
              defaultValue={rapotData[0].Mapel_tauhid}
              id="nilai_tauhid"
              min="5"
              max="9"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nilai_akhlak"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Akhlak
            </label>
            <input
              type="number"
              onChange={(e) => onChangeForm("Mapel_akhlak", e.target.value)}
              defaultValue={rapotData[0].Mapel_akhlak}
              id="nilai_akhlak"
              min="5"
              max="9"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nilai_fikih"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nilai Fikih
            </label>
            <input
              type="number"
              onChange={(e) => onChangeForm("Mapel_fikih", e.target.value)}
              defaultValue={rapotData[0].Mapel_fikih}
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
      </form>
    </section>
  );
};
export default Edit;
