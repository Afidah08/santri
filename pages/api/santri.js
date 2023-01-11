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
    const { error: postSantriError, data: postSantriData } = await supabase
      .from("Santri")
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

    if (!postSantriError) {
      const { error: postKriteriaError } = await supabase
        .from("Kriteria")
        .insert({
          id_santri: postSantriData[0].id_santri,
          Kemampuan: req.body.Kemampuan,
          Komitmen: req.body.Komitmen,
          Riwayat_pendidikan_non_formal: req.body.Riwayat_pendidikan_non_formal,
        });

      if (!postKriteriaError) {
        const { data: santriData, error: santriError } = await supabase
          .from("Santri")
          .select("*, Kriteria(*)")
          .order("id_santri", { ascending: true });

        if (!santriError) {
          ahpContext.import({
            items: getSantriId(santriData),
            criteria: [
              "Kemampuan",
              "Komitmen",
              "Riwayat_pendidikan_non_formal",
            ],
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

          // mapping class
          if (output) {
            const selectedId =
              output.rankedScoreMap[postSantriData[0].id_santri];
            if (selectedId >= 0.005 && selectedId < 0.101) {
              res.status(200).json({
                score: selectedId,
                kelas: 1,
              });
            } else if (selectedId >= 0.101 && selectedId < 0.115) {
              res.status(200).json({
                score: selectedId,
                kelas: 2,
              });
            } else if (selectedId >= 0.115 && selectedId < 0.202) {
              res.status(200).json({
                score: selectedId,
                kelas: 3,
              });
            } else if (selectedId >= 0.202) {
              res.status(200).json({
                score: selectedId,
                kelas: 4,
              });
            }
          }
        }
      }
    }
  }
}
