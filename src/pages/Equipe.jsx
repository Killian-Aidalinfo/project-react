const membres = [
  { nom: "Camille Roy", role: "Lead front-end", initiales: "CR" },
  { nom: "Hugo Petit", role: "Développeur React", initiales: "HP" },
  { nom: "Léa Moreau", role: "Designer UI", initiales: "LM" },
  { nom: "Samir Benali", role: "Intégrateur", initiales: "SB" },
];

export default function Equipe() {
  return (
    <>
      <header className="page__head">
        <p className="eyebrow">Qui sommes-nous</p>
        <h2 className="page__title">Équipe</h2>
        <p className="page__lead">
          Une petite équipe pluridisciplinaire réunie autour du même atelier.
        </p>
      </header>

      <div className="team">
        {membres.map((m, i) => (
          <article
            key={m.nom}
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
