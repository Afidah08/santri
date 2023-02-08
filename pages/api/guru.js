import supabase from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { data, error } = await supabase
      .from("Guru")
      .select("*")
      .order("id_guru", { ascending: true });

    if (!error) {
      res.status(200).json(data);
    }
  }
  if (req.method == "POST") {
    const { error: postGuruError } = await supabase
      .from("Guru")
      .insert({
        id_kelas: req.body.id_kelas,
        NIK: req.body.NIK,
        Nama_lengkap: req.body.Nama_lengkap,
        Tanggal_lahir: req.body.Tanggal_lahir,
        Jenis_kelamin: req.body.Jenis_kelamin,
        Alamat: req.body.Alamat,
        Pendidikan: req.body.Pendidikan,
        Wali_kelas: req.body.Wali_kelas,
      })
      .select();

    if (!postGuruError) {
      res.status(200).json({ status: "ok" });
    } else {
      console.log(postGuruError);

      res.status(400).json({ status: "error" });
    }
  }

  if (req.method == "DELETE") {
    const { error } = await supabase
      .from("Guru")
      .delete()
      .eq("id_guru", req.body.id_guru);

    if (!error) {
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error" });
    }
  }
}
