import AHP from "ahp";
import supabase from "../../lib/supabase";

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
  const ahpContext = new AHP();

  if (req.method == "GET") {
    const { data: santriData, error: santriError } = await supabase
      .from("Santri")
      .select("*, Kriteria(*)")
      .order("id_santri", { ascending: true });

    console.log(santriData);

    if (!santriError) {
      ahpContext.import({
        items: getSantriId(santriData),
        criteria: ["Kemampuan", "Komitmen", "Riwayat_pendidikan_non_formal"],
        criteriaItemRank: {
          Kemampuan: getCriteria("Kemampuan", santriData),
          Komitmen: getCriteria("Komitmen", santriData),
          Riwayat_pendidikan_non_formal: getCriteria(
            "Riwayat_pendidikan_non_formal",
            santriData
          ),
        },
        criteriaRank: [
          [1, 0.25, 0.5],
          [4, 1, 2],
          [2, 0.5, 1],
        ],
      });

      const output = ahpContext.run();
      res.status(200).json({
        ...output,
        rankedScoreMap: santriData
          .map((santri) => {
            return {
              santri: santri.Nama_lengkap,
              nilai: output.rankedScoreMap[santri.id_santri],
            };
          })
          .sort((a, b) => b.nilai - a.nilai),
      });
    }
  }
}
