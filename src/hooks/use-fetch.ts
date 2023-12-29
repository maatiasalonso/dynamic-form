import { useEffect, useState } from "react";
import { FormFields } from "../../types";

export function useFetch(url: string) {
  const [data, setData] = useState<FormFields | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}
