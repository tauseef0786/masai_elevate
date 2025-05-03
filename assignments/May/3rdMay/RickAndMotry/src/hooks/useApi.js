import { useState, useEffect } from "react";

const BASE_URL = "https://rickandmortyapi.com/api";

export const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`${BASE_URL}${endpoint}`)
      .then((res) => res.json())
      .then((dataRes) => {
        setData(dataRes);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
};
