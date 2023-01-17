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
        Nama_kelas: req.body.Nama_kelas,
        Kapasitas: req.body.Kapasitas,
      })
      .select();

    if (!postKelasError) {
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error" });
    }
  }
}
