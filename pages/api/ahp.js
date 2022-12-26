import AHP from "ahp";

const ahpContext = new AHP();

const dataSiswa = [
  {
    name: "nabila",
    criteria: [{ kemampuan: 4, komitmen: 3, riwayat_pendidikan: 5 }],
  },
  {
    name: "putri",
    criteria: [{ kemampuan: 3, komitmen: 4, riwayat_pendidikan: 3 }],
  },
  {
    name: "fian",
    criteria: [{ kemampuan: 2, komitmen: 4, riwayat_pendidikan: 2 }],
  },
];

export default function handler(req, res) {
  ahpContext.import({
    items: ["nabila", "putri", "fian"],
    criteria: ["kemampuan", "komitmen", "riwayatPendidikanNonFormal"],
    criteriaItemRank: {
      kemampuan: [
        [1, 1.3, 2],
        [0.75, 1, 1.5],
        [0.5, 0.6, 1],
      ],
      komitmen: [
        [1, 0.7, 0.7],
        [1.3, 1, 1],
        [1.3, 1, 1],
      ],
      riwayatPendidikanNonFormal: [
        [1, 1.6, 2.5],
        [0.6, 1, 1.5],
        [0.4, 0.6, 1],
      ],
    },
    criteriaRank: [
      [1, 0.25, 0.5],
      [4, 1, 2],
      [2, 0.5, 1],
    ],
  });

  const output = ahpContext.run();

  const test = dataSiswa.map((siswa) => {
    const lol = dataSiswa.map((siswa2) => {
      return `${siswa.name} ${siswa2.name} ${siswa.criteria[0].kemampuan}/${siswa2.criteria[0].kemampuan}`;
    });
    return lol;
  });
  res.status(200).json(test);
}
