import supabase from "../../../lib/supabase";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { slug } = req.query;
    const { data, error } = await supabase
      .from("Guru")
      .select("*")
      .eq("id_guru", slug);

    if (!error) {
      res.status(200).json(data);
    }
  }
}
