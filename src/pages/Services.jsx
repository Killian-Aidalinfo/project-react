const services = [
  {
    no: "01",
    title: "Conception d'interface",
    text: "Maquettage et intégration de composants React clairs et réutilisables.",
  },
  {
    no: "02",
    title: "Développement front",
    text: "Applications single-page rapides, accessibles et faciles à maintenir.",
  },
  {
    no: "03",
    title: "Intégration d'API",
    text: "Connexion à des services distants avec gestion des états de chargement.",
  },
  {
    no: "04",
    title: "Optimisation",
    text: "Performances, bonnes pratiques et structure de code pérenne.",
  },
];

export default function Services() {
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

      <div className="features">
        {services.map((s, i) => (
          <article
            key={s.no}
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
