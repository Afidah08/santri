import supabase from "../../lib/supabase";

export default async function handler(req, res) {
  const { count: countSantri, error: errorSantri } = await supabase
    .from("Santri")
    .select("*", { count: "exact", head: true });

  const { count: countKelas, error: errorKelas } = await supabase
    .from("Kelas")
    .select("*", { count: "exact", head: true });

  const { count: countGuru, error: errorGuru } = await supabase
    .from("Guru")
    .select("*", { count: "exact", head: true });

  const { count: countSantriLulus, errorSantriLulus } = await supabase
    .from("Santri")
    .select("*", { count: "exact", head: true })
    .eq("Status", "Lulus");

  // {
  //   total_santri: countSantri,
  //   total_santri_lulus: countSantriLulus,
  //   total_kelas: countKelas,
  //   total_guru: countGuru,
  // }

  if (!errorSantri && !errorKelas && !errorSantriLulus && !errorGuru) {
    res.status(200).json([
      {
        title: "Jumlah Santri",
        jumlah: countSantri,
      },
      {
        title: "Jumlah Kelas",
        jumlah: countKelas,
      },
      {
        title: "Jumlah Alumni",
        jumlah: countSantriLulus,
      },
      {
        title: "Jumlah Guru",
        jumlah: countGuru,
      },
    ]);
  }
}

//   res.status(200).json(output);
