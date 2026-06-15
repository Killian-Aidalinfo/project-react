const projets = [
  {
    tag: "Interface",
    title: "Tableau de bord",
    text: "Vue de synthèse avec composants réutilisables et données dynamiques.",
  },
  {
    tag: "Données",
    title: "Liste filtrable",
    text: "Recherche et filtres côté client sur une collection d'éléments.",
  },
  {
    tag: "Formulaire",
    title: "Saisie validée",
    text: "Gestion d'état contrôlée et validation des champs en temps réel.",
  },
  {
    tag: "API",
    title: "Consommation REST",
    text: "Récupération de données distantes et états de chargement soignés.",
  },
];

export default function Travaux() {
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

      <div className="grid">
        {projets.map((p, i) => (
          <article
            key={p.title}
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
