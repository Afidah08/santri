import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const useMutation = (method, url) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const router = useRouter();

  const mutate = async (body, route) => {
    setLoading(true);
    const response = await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    if (response.ok) {
      if (method == "POST") {
        toast.success("Berhasil ditambahkan");
      } else {
        toast.success("Berhasil diupdate");
      }

      router.push(route);
      setData(result);
      setLoading(false);
    } else {
      if (method == "PUT") {
        toast.error("Ada yang salah");
      } else {
        toast.error("Ada yang salah");
      }
      setLoading(false);
      setError(true);
    }
  };

  return { mutate, data, loading, error };
};

export default useMutation;
