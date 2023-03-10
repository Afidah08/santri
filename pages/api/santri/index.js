import supabase from "../../../lib/supabase";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { data, error } = await supabase
      .from("Santri")
      .select("*, Kriteria(*), id_kelas(*)")
      .neq("Status", "Mutasi")
      .order("id_santri", { ascending: true });
    console.log(error);
    if (!error) {
      res.status(200).json(data);
    }
  }
  if (req.method == "POST") {
    const { error: postSantriError, data: postSantriData } = await supabase
      .from("Santri")
      .insert({
        id_kelas: req.body.id_kelas,
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
        res.status(200).json({ status: "ok" });
      }
    }
  }

  if (req.method == "PUT") {
    const { error: putSantriError, data: putSantriData } = await supabase
      .from("Santri")
      .update({
        id_kelas: req.body.id_kelas,
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
      .eq("id_santri", req.body.id_santri)
      .select("*, Kriteria(*)");

    console.log(putSantriError);

    if (!putSantriError) {
      const { error: putKriteriaError } = await supabase
        .from("Kriteria")
        .update({
          id_santri: putSantriData[0].id_santri,
          Kemampuan: req.body.Kemampuan,
          Komitmen: req.body.Komitmen,
          Riwayat_pendidikan_non_formal: req.body.Riwayat_pendidikan_non_formal,
        })
        .eq("id_kriteria", putSantriData[0].Kriteria[0].id_kriteria);

      if (!putKriteriaError) {
        res.status(200).json({ status: "ok" });
      } else {
        res.status(200).json({ status: "error" });
      }
    }
  }

  if (req.method == "DELETE") {
    const { error } = await supabase
      .from("Santri")
      .delete()
      .eq("id_santri", req.body.id_santri);

    if (!error) {
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error" });
    }
  }
}
