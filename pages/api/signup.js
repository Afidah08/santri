import supabase from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { error, data } = await supabase.auth.signUp({
      email: req.body.Email,
      password: req.body.Password,
    });

    if (!error) {
      const { error: errorAdmin } = await supabase
        .from("Admin")
        .insert([
          {
            id_admin: data.user.id,
            Nama: req.body.Nama,
            Email: req.body.Email,
          },
        ]);
      if (!errorAdmin) {
        res.status(200).json("success");
      } else {
        res.status(200).json(errorAdmin);
      }
    } else {
      res.status(400).json(error);
    }
  }
}
