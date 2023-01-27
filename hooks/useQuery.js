import React from "react";

const useQuery = (method, url, isClick) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const fetchingData = async () => {
    setLoading(true);
    const response = await fetch(url, {
      method,
    });
    const result = await response.json();
    if (result) {
      console.log("masuk sini");
      setData(result);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  React.useEffect(() => {
    fetchingData();
  }, [isClick]);

  return { data, loading, error };
};

export default useQuery;
