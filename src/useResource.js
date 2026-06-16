import { useEffect, useState } from "react";

/**
 * Charge une ressource via une fonction asynchrone (ex : getTeam).
 * Renvoie { data, loading, error }. data vaut [] tant que rien n'est chargé.
 */
export function useResource(loader) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    loader()
      .then((result) => {
        if (active) setData(result);
      })
      .catch((err) => {
        if (active) setError(err.message ?? "Erreur de chargement");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
    // loader est stable (import de module), pas besoin de le suivre.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
