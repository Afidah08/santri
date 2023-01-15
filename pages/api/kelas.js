import supabase from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { data, error } = await supabase
      .from("Kelas")
      .select("*")
      .order("id_kelas", { ascending: true });

    if (!error) {
      res.status(200).json(data);
    }
  }
  if (req.method == "POST") {
    const { error: postKelasError } = await supabase
      .from("Kelas")
      .insert({
        Nama_lengkap: req.body.Nama_lengkap,
        Nama_panggilan: req.body.Nama_panggilan,
        Tanggal_lahir: req.body.Tanggal_lahir,
        Jenis_kelamin: req.body.Jenis_kelamin,
        Alamat: req.body.Alamat,
        Diterima_pada_tanggal: req.body.Diterima_pada_tanggal,
        Sekolah_formal: req.body.Sekolah_formal,
        Kelas_sekolah: req.body.Kelas_sekolah,
        Status: req.body.Status,
      })
      .select();

    if (!postKelasError) {
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error" });
    }
  }
}
