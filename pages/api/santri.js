import AHP from "ahp";
import supabase from "../../lib/supabase";

const ahpContext = new AHP();

// mapping criteria data
const getCriteria = (criteria, data) => {
  const santri = data.map((siswa) => {
    const santri2 = data.map((siswa2) => {
      return siswa.Kriteria[0][criteria] / siswa2.Kriteria[0][criteria];
    });
    return santri2;
  });
  return santri;
};

// mapping santri id
const getSantriId = (data) => {
  return data.map((siswa) => {
    return siswa.id_santri;
  });
};

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { data, error } = await supabase
      .from("Santri")
      .select("*, Kriteria(*)")
      .order("id_santri", { ascending: true });

    if (!error) {
      res.status(200).json(data);
    }
  }
  if (req.method == "POST") {
    const { data, error } = await supabase
      .from("Santri")
      .select("*, Kriteria(*)")
      .order("id_santri", { ascending: true });

    if (!error) {
      ahpContext.import({
        items: getSantriId(data),
        criteria: ["Kemampuan", "Komitmen", "Riwayat_pendidikan_non_formal"],
        criteriaItemRank: {
          Kemampuan: getCriteria("Kemampuan", data),
          Komitmen: getCriteria("Komitmen", data),
          Riwayat_pendidikan_non_formal: getCriteria(
            "Riwayat_pendidikan_non_formal",
            data
          ),
        },
        criteriaRank: [
          [1, 0.25, 0.5],
          [4, 1, 2],
          [2, 0.5, 1],
        ],
      });

      const output = ahpContext.run();

      res.status(200).json(output);
    }
  }
}
