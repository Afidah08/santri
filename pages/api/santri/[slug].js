import supabase from "../../../lib/supabase";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { slug } = req.query;
    const { data, error } = await supabase
      .from("Santri")
      .select("*, Kriteria(*), id_kelas(*)")
      .eq("id_santri", slug);

    if (!error) {
      res.status(200).json(data);
    }
  }
}
