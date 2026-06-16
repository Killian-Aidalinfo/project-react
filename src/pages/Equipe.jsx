import { getTeam } from "../api";
import { useResource } from "../useResource";

export default function Equipe() {
  const { data: membres, loading, error } = useResource(getTeam);

  return (
    <>
      <header className="page__head">
        <p className="eyebrow">Qui sommes-nous</p>
        <h2 className="page__title">Équipe</h2>
        <p className="page__lead">
          Une petite équipe pluridisciplinaire réunie autour du même atelier.
        </p>
      </header>

      {loading && <p className="notice">Chargement…</p>}
      {error && <p className="notice">Impossible de charger l'équipe : {error}</p>}

      <div className="team">
        {membres.map((m, i) => (
          <article
            key={m.id}
            className="member rise"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="member__avatar">{m.initiales}</span>
            <div>
              <h3>{m.nom}</h3>
              <p className="member__role">{m.role}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
