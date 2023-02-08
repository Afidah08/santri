import supabase from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { data, error } = await supabase
      .from("Rapot")
      .select("*, id_santri(*, id_kelas(*))")
      .order("id_rapot", { ascending: true });

    if (!error) {
      res.status(200).json(data);
    }
  }
  if (req.method == "POST") {
    const { error: postRapotError } = await supabase
      .from("Rapot")
      .insert({
        id_santri: req.body.id_santri,
        id_kriteria: req.body.id_kriteria,
        id_admin: req.body.id_admin,
        Tahun_ajaran: req.body.Tahun_ajaran,
        Semester: req.body.Semester,
        Mapel_tajwid: req.body.Mapel_tajwid,
        Mapel_tauhid: req.body.Mapel_tauhid,
        Mapel_akhlak: req.body.Mapel_akhlak,
        Mapel_fikih: req.body.Mapel_fikih,
      })
      .select();

    if (!postRapotError) {
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error" });
    }
  }

  if (req.method == "DELETE") {
    const { error } = await supabase
      .from("Rapot")
      .delete()
      .eq("id_rapot", req.body.id_rapot);

    if (!error) {
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error" });
    }
  }
}
