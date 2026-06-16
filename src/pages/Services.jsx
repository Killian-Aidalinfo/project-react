import { getServices } from "../api";
import { useResource } from "../useResource";

export default function Services() {
  const { data: services, loading, error } = useResource(getServices);

  return (
    <>
      <header className="page__head">
        <p className="eyebrow">Ce que nous faisons</p>
        <h2 className="page__title">Services</h2>
        <p className="page__lead">
          Un éventail de prestations autour de l'écosystème React, de la
          conception à la mise en production.
        </p>
      </header>

      {loading && <p className="notice">Chargement…</p>}
      {error && <p className="notice">Impossible de charger les services : {error}</p>}

      <div className="features">
        {services.map((s, i) => (
          <article
            key={s.id}
            className="feature rise"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="feature__no">{s.no}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
