import supabase from "../../lib/supabase";

export default async function handler(req, res) {
  const { count: countSantri, error: errorSantri } = await supabase
    .from("Santri")
    .select("*", { count: "exact", head: true });

  const { count: countGraduatedSantri, errorGraduatedSantri } = await supabase
    .from("Santri")
    .select("*", { count: "exact", head: true })
    .eq("Status", "lulus");

  if (!errorSantri && !errorGraduatedSantri) {
    res
      .status(200)
      .json({ santri: countSantri, graduated: countGraduatedSantri });
  }
}

//   res.status(200).json(output);
