import React from "react";
import moment from "moment/moment";

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
          <li>
            <a href="/nilai/tambah">
              <button className=" float-right mr-4 text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark: bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-900">
                + Tambah Data
              </button>
            </a>
          </li>
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
                    <button
                      data-modal-target="authentication-modal"
                      data-modal-toggle="authentication-modal"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      type="button"
                    >
                    <div
                      id="authentication-modal"
                      tabindex="-1"
                      aria-hidden="true"
                      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
                    >
                      <div className="relative w-full h-full max-w-md md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
                          >
                            <span className="sr-only">Close modal</span>
                          </button>
                          <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                              Sign in to our platform
                            </h3>
                            <form class="space-y-6" action="#">
                              <div>
                                <label
                                  for="email"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Your email
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="name@company.com"
                                  required
                                ></input>
                              </div>
                              <div>
                                <label
                                  for="password"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Your password
                                </label>
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="••••••••"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  required
                                ></input>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="remember"
                                      type="checkbox"
                                      value=""
                                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                      required
                                    ></input>
                                  </div>
                                  <label
                                    for="remember"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Remember me
                                  </label>
                                </div>
                                <a
                                  href="#"
                                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                >
                                  Lost Password?
                                </a>
                              </div>
                              <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Login to your account
                              </button>
                              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?{" "}
                                <a
                                  href="#"
                                  className="text-blue-700 hover:underline dark:text-blue-500"
                                >
                                  Create account
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            </tbody>
              ) 
          </table>
        </div>
      </main>
    </>
  );
};

export default Nilai;
