import { getProjects } from "../api";
import { useResource } from "../useResource";

export default function Travaux() {
  const { data: projets, loading, error } = useResource(getProjects);

  return (
    <>
      <header className="page__head">
        <p className="eyebrow">Sélection</p>
        <h2 className="page__title">Travaux</h2>
        <p className="page__lead">
          Quelques exemples de vues à construire pour mettre la base en
          pratique.
        </p>
      </header>

      {loading && <p className="notice">Chargement…</p>}
      {error && <p className="notice">Impossible de charger les travaux : {error}</p>}

      <div className="grid">
        {projets.map((p, i) => (
          <article
            key={p.id}
            className="card rise"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="card__tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
